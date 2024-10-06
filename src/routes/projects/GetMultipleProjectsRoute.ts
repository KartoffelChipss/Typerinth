import {Route} from "../Route";
import {Project} from "../../interfaces/project";
import {URL} from "node:url";
import CacheManager from "../../util/CacheManager";

export class GetMultipleProjectsRoute extends Route<Project[]> {
    private projectIds: string[];

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, projectIds: string[]) {
        super(baseUrl, ua, cacheManager);
        this.projectIds = projectIds;
    }

    getCacheKey(): string|null {
        return `projects:${this.projectIds.join(",")}`;
    }

    getUrl(): URL {
        const url = Route.addPathSegment(this.baseUrl, `/projects`);
        url.searchParams.append("ids", `[${this.projectIds.map(id => `"${id}"`).join(", ")}]`);
        return url;
    }

    parseData(data: any): Project[] {
        if (!data) throw new Error("Unexpected empty response");

        if (data.error) {
            if (data.error === "not_found") throw new Error("Project not found");
            throw new Error(`Unexpected error: ${data.error} (${data.description})`);
        }

        return data as Project[];
    }


}