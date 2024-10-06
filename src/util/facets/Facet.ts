import {FacetType} from "../../enums/facets/FacetType";
import {FacetOperation} from "../../enums/facets/FacetOperation";

/**
 * Represents a facet
 * @description
 * A facet is a filter for searching
 * It consists of a type, an operation, and a value
 * @example
 * // Facet where the version is "1.16.5"
 * new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.16.5")
 * @example
 * // Facet where the downloads are greater than 1000
 * new Facet(FacetType.Downloads, FacetOperation.GREATER_THAN, "1000")
 */
export default class Facet {
    private type: FacetType;
    private operation: FacetOperation;
    private value: string;

    /**
     * Creates a new Facet
     * @param type The type of the facet
     * @param operation The operation of the facet
     * @param value The value of the facet
     * @example
     * // Facet where the version is "1.16.5"
     * new Facet(FacetType.Versions, FacetOperation.EQUALS, "1.16.5")
     * @example
     * // Facet where the downloads are greater than 1000
     * new Facet(FacetType.Downloads, FacetOperation.GREATER_THAN, "1000")
     */
    constructor(type: FacetType, operation: FacetOperation, value: string) {
        this.type = type;
        this.operation = operation;
        this.value = value;
    }

    /**
     * Gets the type of the facet
     * @returns The type of the facet
     */
    getType(): FacetType {
        return this.type;
    }

    /**
     * Gets the operation of the facet
     * @returns The operation of the facet
     */
    getOperation(): FacetOperation {
        return this.operation;
    }

    /**
     * Gets the value of the facet
     * @returns The value of the facet
     */
    getValue(): string {
        return this.value;
    }

    /**
     * Stringifies the facet
     * @returns The stringified facet
     */
    stringify(): string {
        return `"${this.type}${this.operation}${this.value}"`;
    }
}