import FacetGroup from "./FacetGroup";

/**
 * Represents an array of {@link FacetGroup}s for searching
 * @description
 * You can use multiple {@link FacetGroup}s to combine them with an **AND** operation.
 * Inside a {@link FacetGroup}, you can use multiple {@link Facet}s to combine them with an **OR** operation.
 * @example
 * // Search for projects with the category "forge" and the version "1.16.5" or "1.17.1"
 * const searchFacets = new SearchFacets(
 *    // Combined with AND
 *    new FacetGroup(
 *      new Facet(FacetType.Categories, FacetOperation.EQUALS, "forge")
 *    ),
 *    new FacetGroup(
 *      // Combined with OR
 *      new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.16.5"),
 *      new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.17.1")
 *    )
 * );
 */
export default class SearchFacets {
    private facetGroups: FacetGroup[];

    /**
     * Creates an array of FacetGroups for searching
     * @param facetGroups
     * @description
     * You can use multiple {@link FacetGroup}s to combine them with an **AND** operation.
     * Inside a {@link FacetGroup}, you can use multiple {@link Facet}s to combine them with an **OR** operation.
     * @example
     * // Search for projects with the category "forge" and the version "1.16.5" or "1.17.1"
     * const searchFacets = new SearchFacets(
     *    // Combined with AND
     *    new FacetGroup(
     *      new Facet(FacetType.Categories, FacetOperation.EQUALS, "forge")
     *    ),
     *    new FacetGroup(
     *      // Combined with OR
     *      new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.16.5"),
     *      new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.17.1")
     *    )
     * );
     */
    constructor(...facetGroups: FacetGroup[]) {
        this.facetGroups = facetGroups;
    }

    /**
     * Gets the facet groups
     * @returns The facet groups
     */
    getFacetGroups(): FacetGroup[] {
        return this.facetGroups;
    }

    /**
     * Adds a facet group to the search
     * @param facetGroup The facet group to add
     * @returns The search facets
     */
    addFacetGroup(facetGroup: FacetGroup): SearchFacets {
        this.facetGroups.push(facetGroup);
        return this;
    }

    /**
     * Stringifies the search facets
     * @returns The stringified search facets (e.g. [["categories:forge"], ["versions:1.16.5", "versions:1.17.1"]])
     */
    stringify(): string {
        if (this.facetGroups.length === 0) return "";
        return "[" + this.facetGroups.map(facetGroup => facetGroup.stringify()).join(", ") + "]";
    }
}