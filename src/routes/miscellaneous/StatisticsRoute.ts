import {URL} from "url";
import ModrinthStatistics from "../../interfaces/miscellaneous/ModrinthStatistics";
import {Route} from "../Route";
import CacheManager from "../../CacheManager";

export default class StatisticsRoute extends Route<ModrinthStatistics> {
    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager) {
        super(baseUrl, ua, cacheManager);
    }

    getCacheKey(): string|null {
        return "statistics";
    }

    getUrl(): URL {
        return Route.addPathSegment(this.baseUrl, "/statistics");
    }

    parseData(data: any): ModrinthStatistics {
        if (!data) throw new Error("Unexpected empty response");

        return data as ModrinthStatistics;
    }
}