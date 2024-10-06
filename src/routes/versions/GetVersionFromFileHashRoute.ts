import {Route} from "../Route";
import {ProjectVersion, ProjectVersionFromHashOptions} from "../../interfaces/version";
import {URL} from "url";
import CacheManager from "../../util/CacheManager";

export default class GetVersionFromFileHashRoute extends Route<ProjectVersion> {
    private fileHash: string;
    private options: ProjectVersionFromHashOptions;

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, fileHash: string, options: ProjectVersionFromHashOptions = {}) {
        super(baseUrl, ua, cacheManager);
        this.fileHash = fileHash;
        this.options = options;
    }

    getCacheKey(): string|null {
        return `version_from_hash:${this.fileHash}`;
    }

    getUrl(): URL {
        const url = Route.addPathSegment(this.baseUrl, `/version_file/${this.fileHash}`);
        if (this.options.algorithm) url.searchParams.append("algorithm", this.options.algorithm);
        if (!!this.options.multiple) url.searchParams.append("multiple", this.options.multiple.toString());
        return url;
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