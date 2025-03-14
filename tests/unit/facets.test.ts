import {
    Facet,
    FacetGroup,
    FacetType,
    FacetOperation,
    SearchFacets,
} from '../../src';

describe('Facets', () => {
    it('should stringify a facet', () => {
        const facet1 = new Facet(
            FacetType.Categories,
            FacetOperation.Equals,
            'forge'
        );
        expect(facet1.stringify()).toBe('"categories:forge"');

        const facet2 = new Facet(
            FacetType.Downloads,
            FacetOperation.GreaterThan,
            '1000'
        );
        expect(facet2.stringify()).toBe('"downloads>1000"');

        const facet3 = new Facet(
            FacetType.Downloads,
            FacetOperation.LessThanOrEqual,
            '1000'
        );
        expect(facet3.stringify()).toBe('"downloads<=1000"');

        const facet4 = new Facet(
            FacetType.Downloads,
            FacetOperation.NotEquals,
            '1000'
        );
        expect(facet4.stringify()).toBe('"downloads!=1000"');
    });

    it('should stringify facet groups', () => {
        const facet1 = new Facet(
            FacetType.Categories,
            FacetOperation.Equals,
            'forge'
        );
        const facet2 = new Facet(
            FacetType.Versions,
            FacetOperation.Equals,
            '1.16.5'
        );
        const facet3 = new Facet(
            FacetType.Versions,
            FacetOperation.Equals,
            '1.17.1'
        );

        const facetGroup1 = new FacetGroup(facet1);
        expect(facetGroup1.stringify()).toBe('["categories:forge"]');

        const facetGroup2 = new FacetGroup(facet2).addFacet(facet3);
        expect(facetGroup2.stringify()).toBe(
            '["versions:1.16.5", "versions:1.17.1"]'
        );

        const facetGroup3 = new FacetGroup();
        expect(facetGroup3.stringify()).toBe('');
    });

    it('should stringify search facets', () => {
        const facet1 = new Facet(
            FacetType.Categories,
            FacetOperation.Equals,
            'forge'
        );
        const facet2 = new Facet(
            FacetType.Versions,
            FacetOperation.Equals,
            '1.16.5'
        );
        const facet3 = new Facet(
            FacetType.Versions,
            FacetOperation.Equals,
            '1.17.1'
        );

        const facetGroup1 = new FacetGroup(facet1);
        const facetGroup2 = new FacetGroup(facet2).addFacet(facet3);

        const searchFacets = new SearchFacets(facetGroup1, facetGroup2);
        expect(searchFacets.stringify()).toBe(
            '[["categories:forge"], ["versions:1.16.5", "versions:1.17.1"]]'
        );

        const searchFacets2 = new SearchFacets();
        expect(searchFacets2.stringify()).toBe('');
    });
});
