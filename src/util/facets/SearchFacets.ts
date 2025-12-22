import { FacetOperation } from '../../enums/facets/FacetOperation';
import { FacetType } from '../../enums/facets/FacetType';
import { SearchFilters } from '../../interfaces/project/search/SearchFilters';
import Facet from './Facet';
import FacetGroup from './FacetGroup';

/**
 * Represents an array of {@link FacetGroup}s for searching
 *
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
     *
     * You can use multiple {@link FacetGroup}s to combine them with an **AND** operation.
     * Inside a {@link FacetGroup}, you can use multiple {@link Facet}s to combine them with an **OR** operation.
     *
     * @param facetGroups The facet groups
     *
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
        if (this.facetGroups.length === 0) return '';
        return (
            '[' +
            this.facetGroups
                .map((facetGroup) => facetGroup.stringify())
                .join(', ') +
            ']'
        );
    }

    /**
     * Creates SearchFacets from SearchFilters
     * @param filters The search filters
     * @returns The search facets
     */
    public static fromFilters(filters: SearchFilters): SearchFacets {
        const searchFacets = new SearchFacets();

        if (filters.projectType) {
            const facets: Facet[] = Array.isArray(filters.projectType)
                ? filters.projectType.map(
                      (type) =>
                          new Facet(
                              FacetType.ProjectType,
                              FacetOperation.Equals,
                              type
                          )
                  )
                : [
                      new Facet(
                          FacetType.ProjectType,
                          FacetOperation.Equals,
                          filters.projectType
                      ),
                  ];
            const facetGroup = new FacetGroup();
            facets.forEach((facet) => facetGroup.addFacet(facet));
            searchFacets.addFacetGroup(facetGroup);
        }

        if (filters.categories) {
            const facets: Facet[] = Array.isArray(filters.categories)
                ? filters.categories.map(
                      (cat) =>
                          new Facet(
                              FacetType.Categories,
                              FacetOperation.Equals,
                              cat
                          )
                  )
                : [
                      new Facet(
                          FacetType.Categories,
                          FacetOperation.Equals,
                          filters.categories
                      ),
                  ];
            const facetGroup = new FacetGroup();
            facets.forEach((facet) => facetGroup.addFacet(facet));
            searchFacets.addFacetGroup(facetGroup);
        }

        if (filters.versions) {
            const facets: Facet[] = Array.isArray(filters.versions)
                ? filters.versions.map(
                      (ver) =>
                          new Facet(
                              FacetType.Versions,
                              FacetOperation.Equals,
                              ver
                          )
                  )
                : [
                      new Facet(
                          FacetType.Versions,
                          FacetOperation.Equals,
                          filters.versions
                      ),
                  ];
            const facetGroup = new FacetGroup();
            facets.forEach((facet) => facetGroup.addFacet(facet));
            searchFacets.addFacetGroup(facetGroup);
        }

        if (filters.clientSide) {
            const facets: Facet[] = Array.isArray(filters.clientSide)
                ? filters.clientSide.map(
                      (side) =>
                          new Facet(
                              FacetType.ClientSide,
                              FacetOperation.Equals,
                              side
                          )
                  )
                : [
                      new Facet(
                          FacetType.ClientSide,
                          FacetOperation.Equals,
                          filters.clientSide
                      ),
                  ];
            const facetGroup = new FacetGroup();
            facets.forEach((facet) => facetGroup.addFacet(facet));
            searchFacets.addFacetGroup(facetGroup);
        }

        if (filters.serverSide) {
            const facets: Facet[] = Array.isArray(filters.serverSide)
                ? filters.serverSide.map(
                      (side) =>
                          new Facet(
                              FacetType.ServerSide,
                              FacetOperation.Equals,
                              side
                          )
                  )
                : [
                      new Facet(
                          FacetType.ServerSide,
                          FacetOperation.Equals,
                          filters.serverSide
                      ),
                  ];
            const facetGroup = new FacetGroup();
            facets.forEach((facet) => facetGroup.addFacet(facet));
            searchFacets.addFacetGroup(facetGroup);
        }

        if (filters.openSource !== undefined) {
            const facet = new Facet(
                FacetType.OpenSource,
                FacetOperation.Equals,
                filters.openSource.toString()
            );
            const facetGroup = new FacetGroup();
            facetGroup.addFacet(facet);
            searchFacets.addFacetGroup(facetGroup);
        }

        return searchFacets;
    }
}
