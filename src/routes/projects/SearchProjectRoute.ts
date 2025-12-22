import { Route } from '../Route';
import { SearchResult } from '../../interfaces/project';
import { URL } from 'node:url';
import CacheManager from '../../util/CacheManager';
import { Range0to100 } from '../../types/Range';
import SearchOptions, {
    getDefaultSearchOptions,
} from '../../interfaces/project/search/SearchOptions';
import SearchFacets from '../../util/facets/SearchFacets';
import { ApiError, UnexpectedApiError } from '../../errors';
import { SearchFilters } from '../../interfaces/project/search/SearchFilters';
import { SearchSort } from '../../enums/SearchSort';

export default class SearchProjectRoute extends Route<SearchResult> {
    private query: string;
    private searchOptions: SearchOptions;
    private facets?: SearchFacets;
    private filters?: SearchFilters;
    private sort: SearchSort;
    private offset: number;
    private limit: Range0to100;

    constructor(
        baseUrl: URL,
        userAgent: string | undefined,
        cacheManager: CacheManager,
        query: string,
        options: SearchOptions = {}
    ) {
        super(baseUrl, userAgent, cacheManager);

        this.query = query;
        this.searchOptions = {
            ...getDefaultSearchOptions(),
            ...options,
        };
        this.facets = this.searchOptions.facets;
        this.filters = this.searchOptions.filters;
        this.sort = this.searchOptions.sort!!;
        this.offset = this.searchOptions.offset!!;
        this.limit = this.searchOptions.limit!!;
    }

    getCacheKey(): string | null {
        return `search:${this.query}:${this.getStringifiedFacets()}:${this.sort}:${this.offset}:${this.limit}`;
    }

    getUrl(): URL {
        const url = Route.addPathSegment(this.baseUrl, `/search`);
        url.searchParams.append('query', this.query);
        if (this.getSearchFacets()) {
            url.searchParams.append(
                'facets',
                this.getSearchFacets()!!.stringify()!!
            );
        }
        url.searchParams.append('index', this.sort);
        url.searchParams.append('offset', this.offset.toString());
        url.searchParams.append('limit', this.limit.toString());
        return url;
    }

    parseData(data: any): SearchResult {
        if (!data) throw new UnexpectedApiError('Unexpected empty response');

        if (data.error) throw new ApiError(data.error, data.description);

        return data as SearchResult;
    }

    getSearchFacets(): SearchFacets | null {
        const hasValidFacets =
            this.facets && this.facets.getFacetGroups().length > 0;
        const hasValidFilters = this.filters !== undefined;

        if (hasValidFacets) return this.facets!!;
        if (hasValidFilters) return SearchFacets.fromFilters(this.filters!!);

        return null;
    }

    getStringifiedFacets(): string {
        const facets = this.getSearchFacets();
        return facets ? facets.stringify() : '[]';
    }
}
