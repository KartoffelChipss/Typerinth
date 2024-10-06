import SearchHit from "./SearchHit";

export default interface SearchResult {
    hits: SearchHit[];
    offset: number;
    limit: number;
    total_hits: number;
}