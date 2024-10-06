import {Route} from "../Route";
import {Project} from "../../interfaces/project";
import {URL} from "node:url";
import CacheManager from "../../CacheManager";
import {Range0to100} from "../../types/Range";

export class GetRandomProjects extends Route<Project[]> {
    private count: number;

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, count: Range0to100) {
        if (count < 0 || count > 100) {
            throw new Error("Count must be between 0 and 100.");
        }

        super(baseUrl, ua, cacheManager);
        this.count = count;
    }

    getCacheKey(): string|null {
        return null;
    }

    getUrl(): URL {
        const url = Route.addPathSegment(this.baseUrl, `/projects_random`);
        url.searchParams.append("count", this.count.toString());
        return url;
    }

    parseData(data: any): Project[] {
        if (!data) throw new Error("Unexpected empty response");
        if (data.error) throw new Error(`Unexpected error: ${data.error} (${data.description})`);

        return data as Project[];
    }
}