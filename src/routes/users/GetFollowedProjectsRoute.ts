import { URL } from 'url';
import { Route } from '../Route';
import CacheManager from '../../util/CacheManager';
import { ApiError, UserNotFoundError } from '../../errors';
import { Project } from '../../interfaces/project';

export default class GetFollowedProjectsRoute extends Route<Project[]> {
    private userId: string;

    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        authorization: string | undefined,
        userId: string
    ) {
        super(baseUrl, ua, cacheManager, authorization);
        this.userId = userId;
    }

    getCacheKey(): string | null {
        return `user_follwed_projects:${this.userId}`;
    }

    getUrl(): URL {
        return Route.addPathSegment(
            this.baseUrl,
            `/user/${this.userId}/follows`
        );
    }

    parseData(data: any, status: number): Project[] {
        if (status === 404) {
            throw new UserNotFoundError('User not found');
        }

        if (data.error) {
            throw new ApiError(data.error, data.description);
        }

        return data as Project[];
    }
}
