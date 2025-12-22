import { SearchSort } from '../../../enums/SearchSort';
import { Range0to100 } from '../../../types/Range';
import SearchFacets from '../../../util/facets/SearchFacets';
import { SearchFilters } from './SearchFilters';

/**
 * Search options for the search method.
 */
export default interface SearchOptions {
    /** The facets to filter the search results by. This is a bit more complicated, but also more powerful than the filters. If specified, it will override the filters. */
    facets?: SearchFacets;
    /** The offset to start the search from. */
    offset?: number;
    /** The maximum number of results to return. (max: 100) */
    limit?: Range0to100;
    /** The filters to apply to the search. */
    filters?: SearchFilters;
    /** The sort order of the search results. */
    sort?: SearchSort;
}

/**
 * Gets the default search options.
 * @returns The default search options.
 */
export function getDefaultSearchOptions(): SearchOptions {
    return {
        facets: undefined,
        sort: SearchSort.Relevance,
        offset: 0,
        limit: 10,
        filters: undefined,
    };
}
