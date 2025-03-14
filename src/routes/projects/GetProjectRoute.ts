import { Route } from '../Route';
import { Project } from '../../interfaces/project';
import { URL } from 'node:url';
import CacheManager from '../../util/CacheManager';
import {
    ApiError,
    UnexpectedApiError,
    ProjectNotFoundError,
} from '../../errors';

export class GetProjectRoute extends Route<Project> {
    private projectId: string;

    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        projectId: string
    ) {
        super(baseUrl, ua, cacheManager);
        this.projectId = projectId;
    }

    getCacheKey(): string | null {
        return `project:${this.projectId}`;
    }

    getUrl(): URL {
        return Route.addPathSegment(this.baseUrl, `/project/${this.projectId}`);
    }

    parseData(data: any): Project {
        if (data === null) throw new ProjectNotFoundError('Project not found');

        if (!data) throw new UnexpectedApiError('Unexpected empty response');

        if (data.error) {
            if (data.error === 'not_found')
                throw new ProjectNotFoundError('Project not found');
            throw new ApiError(data.error, data.description);
        }

        return data as Project;
    }
}
