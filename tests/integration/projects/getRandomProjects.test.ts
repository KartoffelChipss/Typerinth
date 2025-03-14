import { testClient } from '../testClient';

describe('Modrinth - getRandomProjects (Integration)', () => {
    it('should get 3 random projects', async () => {
        const projects = await testClient.getRandomProjects(3);

        expect(projects).toHaveLength(3);
    });
});
