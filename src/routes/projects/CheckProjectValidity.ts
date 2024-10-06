import {URL} from "url";
import {Route} from "../Route";
import CacheManager from "../../util/CacheManager";

export class CheckProjectValidity extends Route<boolean> {
    private projectId: string;

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, projectId: string) {
        super(baseUrl, ua, cacheManager);
        this.projectId = projectId;
    }

    getCacheKey(): string|null {
        return `project-validity-${this.projectId}`;
    }

    getUrl(): URL {
        return Route.addPathSegment(this.baseUrl, `/project/${this.projectId}/check`);
    }

    parseData(data: any): boolean {
        return !(!data || data.error);
    }
}