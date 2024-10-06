import {Route} from "../Route";
import {SearchResult} from "../../interfaces/project";
import {URL} from "node:url";
import CacheManager from "../../util/CacheManager";
import {Range0to100} from "../../types/Range";
import {SearchIndex} from "../../enums/SearchIndex";
import SearchOptions, {getDefaultSearchOptions} from "../../interfaces/project/search/SearchOptions";
import SearchFacets from "../../util/facets/SearchFacets";

export default class SearchProjectRoute extends Route<SearchResult> {
    private query: string;
    private searchOptions: SearchOptions;
    private facets: SearchFacets;
    private index: SearchIndex;
    private offset: number;
    private limit: Range0to100;

    constructor(baseUrl: URL, userAgent: string|undefined, cacheManager: CacheManager, query: string, options: SearchOptions = {}) {
        super(baseUrl, userAgent, cacheManager);

        this.query = query;
        this.searchOptions = {
            ...getDefaultSearchOptions(),
            ...options
        }
        this.facets = this.searchOptions.facets!!;
        this.index = this.searchOptions.index!!;
        this.offset = this.searchOptions.offset!!;
        this.limit = this.searchOptions.limit!!;
    }

    getCacheKey(): string|null {
        return ``;
    }

    getUrl(): URL {
        const url = Route.addPathSegment(this.baseUrl, `/search`);
        url.searchParams.append("query", this.query);
        if (this.facets.getFacetGroups().length > 0) url.searchParams.append("facets", this.facets.stringify());
        url.searchParams.append("index", this.index);
        url.searchParams.append("offset", this.offset.toString());
        url.searchParams.append("limit", this.limit.toString());
        console.log(url.href)
        return url;
    }

    parseData(data: any): SearchResult {
        if (!data) throw new Error("Unexpected empty response");

        if (data.error) throw new Error(`Unexpected error: ${data.error} (${data.description})`);

        return data as SearchResult;
    }
}