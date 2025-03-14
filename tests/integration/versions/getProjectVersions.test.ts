import { testClient } from '../testClient';

describe('Modrinth - getVersion (Integration)', () => {
    it('should fetch a version by its ID', async () => {
        const projectId = 'fabric-api'; // fabric-api

        const versions = await testClient.getProjectVersions(projectId);

        versions.forEach((version) => {
            expect(version.project_id).toBe('P7dR8mSH'); // fabric-api project id
        });
    });

    it('should throw an error if there are no versions does not exist', async () => {
        const projectId = 'this-project-hopefully-does-not-exist';

        await expect(testClient.getProjectVersions(projectId)).rejects.toThrow(
            'Project version not found'
        );
    });
});
