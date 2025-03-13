/**
 * Represents a donation URL for a project on Modrinth.
 */
export default interface DonationUrl {
    /** The ID of the donation platform. */
    id: string;

    /** The donation platform this link is to. */
    platform: string;

    /** The URL of the donation platform and user. */
    url: string;
}
