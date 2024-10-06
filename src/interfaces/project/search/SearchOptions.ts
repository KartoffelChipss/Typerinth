import {SearchIndex} from "../../../enums/SearchIndex";
import {Range0to100} from "../../../types/Range";
import SearchFacets from "../../../util/facets/SearchFacets";

export default interface SearchOptions {
    facets?: SearchFacets;
    index?: SearchIndex;
    offset?: number;
    limit?: Range0to100;
}

export function getDefaultSearchOptions(): SearchOptions {
    return {
        facets: new SearchFacets(),
        index: SearchIndex.Relevance,
        offset: 0,
        limit: 10
    }
}