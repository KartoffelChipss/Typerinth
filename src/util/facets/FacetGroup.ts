import Facet from "./Facet";

/**
 * Represents a group of {@link Facet}s
 * @description
 * Facets in a group are combined with an **OR** operation
 * @example
 * // FacetGroup with the version "1.16.5" or "1.17.1"
 * new FacetGroup(
 *   // Combined with OR
 *   new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.16.5"),
 *   new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.17.1")
 * );
 */
export default class FacetGroup {
    private facets: Facet[];

    /**
     * Creates a new FacetGroup with the given facets.
     * Facets in a group are combined with an **OR** operation
     * @param facets The facets to create the group with
     * @example
     * // FacetGroup with the version "1.16.5" or "1.17.1"
     * new FacetGroup(
     *   // Combined with OR
     *   new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.16.5"),
     *   new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.17.1")
     * )
     */
    constructor(...facets: Facet[]) {
        this.facets = facets;
    }

    /**
     * Gets the facets
     * @returns The facets
     */
    getFacets(): Facet[] {
        return this.facets;
    }

    /**
     * Adds a facet to the group
     * @param facet The facet to add
     * @returns The facet group
     */
    addFacet(facet: Facet): FacetGroup {
        this.facets.push(facet);
        return this;
    }

    /**
     * Stringifies the facet group
     * @returns The stringified facet group (e.g. ["categories:forge"] or ["versions:1.16.5", "versions:1.17.1"])
     */
    stringify(): string {
        if (this.facets.length === 0) return "";
        return "[" + this.facets.map(facet => facet.stringify()).join(", ") + "]";
    }
}