import {Route} from "../Route";
import CacheManager from "../../util/CacheManager";
import {URL} from "url";
import {ProjectVersion, ProjectVersionSearchOptions} from "../../interfaces/version";

export default class GetProjectVersionsRoute extends Route<ProjectVersion[]> {
    private projectId: string;
    private options: ProjectVersionSearchOptions;

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, projectId: string, options: ProjectVersionSearchOptions = {}) {
        super(baseUrl, ua, cacheManager);
        this.projectId = projectId;
        this.options = options;
    }

    getCacheKey(): string|null {
        return `project_versions:${this.projectId}`;
    }

    getUrl(): URL {
        const url = Route.addPathSegment(this.baseUrl, `/project/${this.projectId}/version`);
        if (this.options.loaders) url.searchParams.append("loaders", `[${this.options.loaders?.map(l => '"' + l + '"').join(",") ?? ""}]`);
        if (this.options.game_versions) url.searchParams.append("game_versions", `[${this.options.game_versions?.map(gv => '"' + gv + '"').join(",") ?? ""}]`);
        if (!!this.options.featured) url.searchParams.append("featured", this.options.featured?.toString());
        return url;
    }

    parseData(data: any): ProjectVersion[] {
        if (!data) throw new Error("Unexpected empty response");

        if (data.error) {
            if (data.error === "not_found") throw new Error("Project version not found");
            throw new Error(`Unexpected error: ${data.error} (${data.description})`);
        }

        return data as ProjectVersion[];
    }
}