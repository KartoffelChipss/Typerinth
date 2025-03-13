import SearchHit from './SearchHit';

/**
 * Represents the result of a search query.
 */
export default interface SearchResult {
    /** The list of results */
    hits: SearchHit[];
    /** The number of results that were skipped by the query */
    offset: number;
    /** The number of results that were returned by the query */
    limit: number;
    /** The total number of results that match the query */
    total_hits: number;
}
