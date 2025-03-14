import { testClient } from '../testClient';

describe('Modrinth - getMultipleProjects (Integration)', () => {
    it('should fetch a project by ID or slug', async () => {
        const projectsSlugs = ['fabric-api', 'sodium', 'cloth-config'];

        const projects = await testClient.getProjects(projectsSlugs);

        expect(projects.map((p) => p.slug).sort()).toEqual(
            projectsSlugs.sort()
        );
    });
});
