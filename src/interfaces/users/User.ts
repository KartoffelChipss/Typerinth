import PayoutData from './PayoutData';

/**
 * Represents a Modrinth user.
 */
export default interface User {
    /** The user’s username */
    username: string;

    /** The user’s display name */
    name: string | null;

    /**
     * The user’s email (only displayed if requesting your own account). Requires USER_READ_EMAIL PAT scope.
     */
    email: string | null;

    /** A description of the user */
    bio: string;

    /** Various data relating to the user’s payouts status (you can only see your own) */
    payout_data: PayoutData | null;

    /** The user’s ID */
    id: string;

    /** The user’s avatar url */
    avatar_url: string;

    /** The time at which the user was created */
    created: string;

    /** The user’s role */
    role: string;

    /**
     * Any badges applicable to this user. These are currently unused and undisplayed, and as such are subject to change
     * In order from first to seventh bit, the current bits are:
     * * (unused)
     * * `EARLY_MODPACK_ADOPTER`
     * * `EARLY_RESPACK_ADOPTER`
     * * `EARLY_PLUGIN_ADOPTER`
     * * `ALPHA_TESTER`
     * * `CONTRIBUTOR`
     * * `TRANSLATOR`
     */
    badges: number;

    /**
     * A list of authentication providers you have signed up for (only displayed if requesting your own account)
     */
    auth_providers: string[] | null;

    /** Whether your email is verified (only displayed if requesting your own account) */
    email_verified: boolean | null;

    /**
     * Whether you have a password associated with your account (only displayed if requesting your own account)
     */
    has_password: boolean | null;

    /**
     * Whether you have TOTP two-factor authentication connected to your account (only displayed if requesting your own account)
     */
    has_totp: boolean | null;

    /**
     * @deprecated This is no longer public for security reasons and is always null
     */
    github_id: number | null;
}
