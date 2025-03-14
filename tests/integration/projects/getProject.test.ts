import { testClient } from '../testClient';

describe('Modrinth - getProject (Integration)', () => {
    it('should fetch a project by ID or slug', async () => {
        const projectSlug = 'fabric-api';

        const project = await testClient.getProject(projectSlug);

        expect(project.slug).toBe(projectSlug);
    });

    it('should throw an error if the project does not exist', async () => {
        const projectSlug = 'this-project-hopfully-does-not-exist';

        await expect(testClient.getProject(projectSlug)).rejects.toThrow(
            'Project not found'
        );
    });
});
