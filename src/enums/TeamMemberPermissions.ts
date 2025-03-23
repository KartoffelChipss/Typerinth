export enum TeamMemberPermissions {
    UploadVersion = 'UPLOAD_VERSION',
    DeleteVersion = 'DELETE_VERSION',
    EditDetails = 'EDIT_DETAILS',
    EditBody = 'EDIT_BODY',
    ManageInvites = 'MANAGE_INVITES',
    RemoveMember = 'REMOVE_MEMBER',
    EditMember = 'EDIT_MEMBER',
    DeleteProject = 'DELETE_PROJECT',
    ViewAnalytics = 'VIEW_ANALYTICS',
    ViewPayouts = 'VIEW_PAYOUTS',
}

export function bitfieldToArray(
    bitfield: number | null
): TeamMemberPermissions[] {
    if (bitfield === null) return [];

    const permissions = [
        TeamMemberPermissions.UploadVersion,
        TeamMemberPermissions.DeleteVersion,
        TeamMemberPermissions.EditDetails,
        TeamMemberPermissions.EditBody,
        TeamMemberPermissions.ManageInvites,
        TeamMemberPermissions.RemoveMember,
        TeamMemberPermissions.EditMember,
        TeamMemberPermissions.DeleteProject,
        TeamMemberPermissions.ViewAnalytics,
        TeamMemberPermissions.ViewPayouts,
    ];

    return permissions.filter((_, index) => (bitfield & (1 << index)) !== 0);
}
