import { testClient } from '../testClient';

describe('Modrinth - getProjectTeamMembers (Integration)', () => {
    it('should fetch the members of a team using the proeject id', async () => {
        const projectId = 'lifestealz';
        const projectTeamId = 'WM2U4Vdg';

        const members = await testClient.getProjectTeamMembers(projectId);

        expect(members.map((m) => m.team_id)).toEqual(
            Array(members.length).fill(projectTeamId)
        );
    });

    it('should throw an error if the project does not exist', async () => {
        const projectSlug = 'this-project-hopfully-does-not-exist';

        await expect(
            testClient.getProjectTeamMembers(projectSlug)
        ).rejects.toThrow('Project not found');
    });
});
