/**
 * Represents a license.
 */
export default interface License {
    /** The SPDX license ID of a project. */
    id: string;

    /** The long name of the license. */
    name: string;

    /** The URL to this license. */
    url: string | null;
}
