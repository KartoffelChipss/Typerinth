import { URL } from 'url';
import { Route } from '../Route';
import { User } from '../../interfaces/users';
import CacheManager from '../../util/CacheManager';
import { ApiError, UnexpectedApiError, UserNotFoundError } from '../../errors';

export default class GetAuthUserRoute extends Route<User> {
    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        auhtorization: string | undefined
    ) {
        super(baseUrl, ua, cacheManager, auhtorization);
    }

    getCacheKey(): string | null {
        return `authuser`;
    }

    getUrl(): URL {
        return Route.addPathSegment(this.baseUrl, `/user`);
    }

    parseData(data: any): User {
        if (data === null) throw new UserNotFoundError('User not found');
        if (!data) throw new UnexpectedApiError('Unexpected empty response');

        if (data.error) {
            throw new ApiError(data.error, data.description);
        }

        return data as User;
    }
}
