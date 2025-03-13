import { SearchIndex } from '../../../enums/SearchIndex';
import { Range0to100 } from '../../../types/Range';
import SearchFacets from '../../../util/facets/SearchFacets';

/**
 * Search options for the search method.
 */
export default interface SearchOptions {
    /** The facets to filter the search results by. */
    facets?: SearchFacets;
    /** The index to search on. */
    index?: SearchIndex;
    /** The offset to start the search from. */
    offset?: number;
    /** The maximum number of results to return. (max: 100) */
    limit?: Range0to100;
}

/**
 * Gets the default search options.
 * @returns The default search options.
 */
export function getDefaultSearchOptions(): SearchOptions {
    return {
        facets: new SearchFacets(),
        index: SearchIndex.Relevance,
        offset: 0,
        limit: 10,
    };
}
