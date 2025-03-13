export enum FacetOperation {
    Equals = ':',
    NotEquals = '!=',
    GreaterThan = '>',
    GreaterThanOrEqual = '>=',
    LessThan = '<',
    LessThanOrEqual = '<=',

    /** @deprecated Use {@link FacetOperation.GreaterThan} instead */
    EQUALS = FacetOperation.Equals,
    /** @deprecated Use {@link FacetOperation.NotEquals} instead */
    NOT_EQUALS = FacetOperation.NotEquals,
    /** @deprecated Use {@link FacetOperation.GreaterThan} instead */
    GREATER_THAN = FacetOperation.GreaterThan,
    /** @deprecated Use {@link FacetOperation.GreaterThanOrEqual} instead */
    GREATER_THAN_OR_EQUAL = FacetOperation.GreaterThanOrEqual,
    /** @deprecated Use {@link FacetOperation.LessThan} instead */
    LESS_THAN = FacetOperation.LessThan,
    /** @deprecated Use {@link FacetOperation.LessThanOrEqual} instead */
    LESS_THAN_OR_EQUAL = FacetOperation.LessThanOrEqual,
}
