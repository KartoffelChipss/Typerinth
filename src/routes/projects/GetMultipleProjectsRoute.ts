import { Route } from '../Route';
import { Project } from '../../interfaces/project';
import { URL } from 'node:url';
import CacheManager from '../../util/CacheManager';
import { ApiError, UnexpectedApiError } from '../../errors';

export class GetMultipleProjectsRoute extends Route<Project[]> {
    private projectIds: string[];

    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        projectIds: string[]
    ) {
        super(baseUrl, ua, cacheManager);
        this.projectIds = projectIds;
    }

    getCacheKey(): string | null {
        return `projects:${this.projectIds.join(',')}`;
    }

    getUrl(): URL {
        const url = Route.addPathSegment(this.baseUrl, `/projects`);
        url.searchParams.append(
            'ids',
            `[${this.projectIds.map((id) => `"${id}"`).join(', ')}]`
        );
        return url;
    }

    parseData(data: any): Project[] {
        if (!data) throw new UnexpectedApiError('Unexpected empty response');
        if (data.error) throw new ApiError(data.error, data.description);
        return data as Project[];
    }
}
