import { Route } from '../Route';
import { ProjectVersion } from '../../interfaces/version';
import CacheManager from '../../util/CacheManager';
import { URL } from 'url';
import { ApiError, UnexpectedApiError } from '../../errors';

export default class GetMultipleVersionsRoute extends Route<ProjectVersion[]> {
    private versionIds: string[];

    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        versionIds: string[]
    ) {
        super(baseUrl, ua, cacheManager);
        this.versionIds = versionIds;
    }

    getCacheKey(): string | null {
        return `versions:${this.versionIds.join(',')}`;
    }

    getUrl(): URL {
        const url = Route.addPathSegment(this.baseUrl, `/versions`);
        url.searchParams.append(
            'ids',
            `[${this.versionIds.map((id) => '"' + id + '"').join(',')}]`
        );
        return url;
    }

    parseData(data: any): ProjectVersion[] {
        if (!data) throw new UnexpectedApiError('Unexpected empty response');
        if (data.error) throw new ApiError(data.error, data.description);
        return data as ProjectVersion[];
    }
}
