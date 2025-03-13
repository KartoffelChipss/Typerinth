import DonationUrl from './DonationUrl';
import License from './License';
import GalleryItem from './GalleryItem';

/**
 * Represents a project on Modrinth.
 */
export default interface Project {
    /** The slug of a project, used for vanity URLs. */
    slug: string;

    /** The title or name of the project. */
    title: string;

    /** A short description of the project. */
    description: string;

    /** A list of the categories that the project has. */
    categories: string[];

    /** The client-side support of the project. */
    client_side: string;

    /** The server-side support of the project. */
    server_side: string;

    /** A long-form description of the project. */
    body: string;

    /** The status of the project. */
    status: string;

    /** The requested status when submitting for review or scheduling the project for release. */
    requested_status: string | null;

    /** A list of categories that are searchable but non-primary. */
    additional_categories: string[];

    /** An optional link to where to submit bugs or issues with the project. */
    issues_url: string | null;

    /** An optional link to the source code of the project. */
    source_url: string | null;

    /** An optional link to the project’s wiki page or other relevant information. */
    wiki_url: string | null;

    /** An optional invite link to the project’s Discord. */
    discord_url: string | null;

    /** A list of donation links for the project. */
    donation_urls: DonationUrl[];

    /** The project type of the project. */
    project_type: string;

    /** The total number of downloads of the project. */
    downloads: number;

    /** The URL of the project’s icon. */
    icon_url: string | null;

    /** The RGB color of the project, automatically generated from the project icon. */
    color: number | null;

    /** The ID of the moderation thread associated with this project. */
    thread_id: string;

    /** The monetization status of the project. */
    monetization_status: 'monetized' | 'demonetized' | 'force-demonetized';

    /** The ID of the project, encoded as a base62 string. */
    id: string;

    /** The ID of the team that has ownership of this project. */
    team: string;

    /**
     * The link to the long description of the project. Always null, only kept for legacy compatibility.
     * @deprecated Use `body` instead.
     */
    body_url: string | null;

    /** A message that a moderator sent regarding the project. */
    moderator_message: string | null;

    /** The date the project was published. */
    published: string;

    /** The date the project was last updated. */
    updated: string;

    /** The date the project’s status was set to an approved status. */
    approved: string | null;

    /** The date the project’s status was submitted to moderators for review. */
    queued: string | null;

    /** The total number of users following the project. */
    followers: number;

    /** The license of the project. */
    license: License;

    /** A list of the version IDs of the project (will never be empty unless draft status). */
    versions: string[];

    /** A list of all of the game versions supported by the project. */
    game_versions: string[];

    /** A list of all of the loaders supported by the project. */
    loaders: string[];

    /** A list of images that have been uploaded to the project’s gallery. */
    gallery: GalleryItem[];
}
