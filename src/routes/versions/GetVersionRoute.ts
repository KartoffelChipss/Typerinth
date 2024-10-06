import {Route} from "../Route";
import {ProjectVersion} from "../../interfaces/version";
import CacheManager from "../../util/CacheManager";
import {URL} from "url";

export default class GetVersionRoute extends Route<ProjectVersion> {
    private versionId: string;

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, versionId: string) {
        super(baseUrl, ua, cacheManager);
        this.versionId = versionId;
    }

    getCacheKey(): string|null {
        return `version:${this.versionId}`;
    }

    getUrl(): URL {
        return Route.addPathSegment(this.baseUrl, `/version/${this.versionId}`);
    }

    parseData(data: any): ProjectVersion {
        if (!data) throw new Error("Unexpected empty response");

        if (data.error) {
            if (data.error === "not_found") throw new Error("Project version not found");
            throw new Error(`Unexpected error: ${data.error} (${data.description})`);
        }

        return data as ProjectVersion;
    }
}