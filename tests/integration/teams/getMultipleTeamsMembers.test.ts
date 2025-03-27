import { testClient } from '../testClient';

describe('Modrinth - getMultipleTeamsMembers (Integration)', () => {
    it('should fetch the members of multiple teams', async () => {
        const teamIds = ['WM2U4Vdg', 'P9lZjrAx'];

        const teamMembers = await testClient.getMultipleTeamMembers(teamIds);

        const flattenedTeamMembers = teamMembers.flat();

        const allValidTeamIds = flattenedTeamMembers.map(
            (member) => member.team_id
        );

        allValidTeamIds.forEach((teamId) => {
            expect(teamIds).toContain(teamId);
        });

        expect(teamMembers.length).toBe(2);

        teamMembers.forEach((teamMembersForTeam) => {
            const uniqueTeamIds = [
                ...new Set(teamMembersForTeam.map((member) => member.team_id)),
            ];
            expect(uniqueTeamIds.length).toBe(1);
        });

        const recievedTeamIds = teamMembers.map((t) => t[0].team_id).sort();
        expect(recievedTeamIds).toEqual(teamIds.sort());
    });
});
