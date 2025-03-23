import { TeamMemberPermissions } from '../../enums/TeamMemberPermissions';
import { User } from '../users';

/**
 * Represents the member of a team.
 */
export default interface TeamMember {
    /** The ID of the team this team member is a member of */
    team_id: string;

    user: User;

    /**
     * The user’s role on the team
     *
     * @example "Member"
     */
    role: string;

    /**
     * The permissions this user has on the team.
     *
     * (requires authorization to view)
     */
    permissions: TeamMemberPermissions[];

    /**
     * The user’s permissions in bitfield format (requires authorization to view)
     *
     * In order from first to tenth bit, the bits are:
     *
     * * UPLOAD_VERSION
     * * DELETE_VERSION
     * * EDIT_DETAILS
     * * EDIT_BODY
     * * MANAGE_INVITES
     * * REMOVE_MEMBER
     * * EDIT_MEMBER
     * * DELETE_PROJECT
     * * VIEW_ANALYTICS
     * * VIEW_PAYOUTS
     */
    permissions_bitfield: number | null;

    /**
     * Whether or not the user has accepted to be on the team
     * (requires authorization to view)
     */
    accepted: boolean | null;

    /**
     * The split of payouts going to this user. The proportion of payouts they get is their split divided by the sum of the splits of all members.
     */
    payouts_split: number | null;

    /**
     * The order of the team member.
     */
    ordering: number;
}
