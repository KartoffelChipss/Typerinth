import { testClient } from '../testClient';

describe('Modrinth - getTeamMembers (Integration)', () => {
    it('should fetch the members of a team by its ID', async () => {
        const teamId = 'WM2U4Vdg';

        const members = await testClient.getTeamMembers(teamId);

        expect(members.map((m) => m.team_id)).toEqual(
            Array(members.length).fill(teamId)
        );
    });

    it('should return an empty array if the team does not exists', async () => {
        const teamId = 'AAAAAAAA';

        await expect(testClient.getTeamMembers(teamId)).resolves.toEqual([]);
    });
});
