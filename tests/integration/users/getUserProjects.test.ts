import { testClient } from '../testClient';

describe('Modrinth - getUserProjects (Integration)', () => {
    it('should fetch a users projects by the users slug or ID', async () => {
        const username = 'Geometrically';

        const projects = await testClient.getUserProjects(username);

        expect(projects).toBeDefined();
    });

    it('should throw an error if the user or the users projects do not exist', async () => {
        const username = 'this-user-hopfully-does-not-exist';

        await expect(testClient.getUserProjects(username)).rejects.toThrow(
            'User projects not found'
        );
    });
});
