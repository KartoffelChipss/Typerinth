import {
    Facet,
    FacetGroup,
    FacetType,
    FacetOperation,
    SearchFacets,
} from '../../src';
import { SearchFilters } from '../../src/interfaces/project/search/SearchFilters';

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

describe('SearchFacets.fromFilters', () => {
    it('returns empty SearchFacets for empty filters object', () => {
        const filters: SearchFilters = {};

        const facets = SearchFacets.fromFilters(filters);

        expect(facets.getFacetGroups().length).toBe(0);
        expect(facets.stringify()).toBe('');
    });

    it('creates facets from single-value filters', () => {
        const filters: SearchFilters = {
            categories: 'utility',
            versions: '1.20',
        };

        const facets = SearchFacets.fromFilters(filters);

        expect(facets.stringify()).toBe(
            '[["categories:utility"], ["versions:1.20"]]'
        );
    });

    it('creates facets from array-based filters', () => {
        const filters: SearchFilters = {
            categories: ['utility', 'worldgen'],
            versions: ['1.20', '1.21'],
        };

        const facets = SearchFacets.fromFilters(filters);

        expect(facets.stringify()).toBe(
            '[' +
                '["categories:utility", "categories:worldgen"], ' +
                '["versions:1.20", "versions:1.21"]' +
                ']'
        );
    });

    it('creates facets for projectType filters', () => {
        const filters: SearchFilters = {
            projectType: ['mod', 'plugin'],
        };

        const facets = SearchFacets.fromFilters(filters);

        expect(facets.stringify()).toBe(
            '[["project_type:mod", "project_type:plugin"]]'
        );
    });

    it('creates facets for clientSide and serverSide filters', () => {
        const filters: SearchFilters = {
            clientSide: 'required',
            serverSide: 'optional',
        };

        const facets = SearchFacets.fromFilters(filters);

        expect(facets.stringify()).toBe(
            '[["client_side:required"], ["server_side:optional"]]'
        );
    });

    it('creates facet for openSource = true', () => {
        const filters: SearchFilters = {
            openSource: true,
        };

        const facets = SearchFacets.fromFilters(filters);

        expect(facets.stringify()).toBe('[["open_source:true"]]');
    });

    it('creates facet for openSource = false', () => {
        const filters: SearchFilters = {
            openSource: false,
        };

        const facets = SearchFacets.fromFilters(filters);

        expect(facets.stringify()).toBe('[["open_source:false"]]');
    });

    it('creates facets for a full filter combination', () => {
        const filters: SearchFilters = {
            projectType: 'mod',
            categories: ['utility'],
            versions: ['1.20'],
            clientSide: 'required',
            serverSide: 'optional',
            openSource: true,
        };

        const facets = SearchFacets.fromFilters(filters);

        expect(facets.stringify()).toBe(
            '[' +
                '["project_type:mod"], ' +
                '["categories:utility"], ' +
                '["versions:1.20"], ' +
                '["client_side:required"], ' +
                '["server_side:optional"], ' +
                '["open_source:true"]' +
                ']'
        );
    });
});
