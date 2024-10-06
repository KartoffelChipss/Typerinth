import CacheManager from "../../util/CacheManager";
import {Project} from "../../interfaces/project";
import {Route} from "../Route";
import {URL} from "url";

export default class GetUserProjectsRoute extends Route<Project[]> {
    private userId: string;

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, userId: string) {
        super(baseUrl, ua, cacheManager);
        this.userId = userId;
    }

    getCacheKey(): string|null {
        return `user_projects:${this.userId}`;
    }

    getUrl(): URL {
        return Route.addPathSegment(this.baseUrl, `/user/${this.userId}/projects`);
    }

    parseData(data: any): Project[] {
        if (!data) throw new Error("Unexpected empty response");

        if (data.error) {
            if (data.error === "not_found") throw new Error("User projects not found");
            throw new Error(`Unexpected error: ${data.error} (${data.description})`);
        }

        return data as Project[];
    }
}