/**
 * Represents a search hit from the search endpoint.
 */
export default interface SearchHit {
    /** The slug of a project, used for vanity URLs */
    slug: string;

    /** The title or name of the project */
    title: string;

    /** A short description of the project */
    description: string;

    /** A list of the categories that the project has */
    categories: string[];

    /** The client side support of the project */
    client_side: string;

    /** The server side support of the project */
    server_side: string;

    /** The project type of the project */
    project_type: string;

    /** The total number of downloads of the */
    downloads: number;

    /** The URL of the project’s icon */
    icon_url: string | null;

    /** The RGB color of the project, automatically generated from the project icon */
    color: number | null;

    /** The ID of the moderation thread associated with this project */
    thread_id: string;

    /** The monetization status of the project. */
    monetization_status: 'monetized' | 'demonetized' | 'force-demonetized';

    /** The ID of the project */
    project_id: string;

    /** The username of the project’s author */
    author: string;

    /** A list of the categories that the project has which are not secondary */
    display_categories: string[];

    /** A list of the minecraft versions supported by the project */
    versions: string[];

    /** The total number of users following the project */
    follows: number;

    /** The date the project was added to search */
    date_created: string;

    /** The date the project was last modified */
    date_modified: string;

    /** The latest version of minecraft that this project supports */
    latest_version: string;

    /** The SPDX license ID of a project */
    license: string;

    /** All gallery images attached to the project */
    gallery: string[];

    /** The featured gallery image of the project */
    featured_gallery: string | null;
}
