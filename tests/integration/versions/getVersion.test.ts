import { testClient } from '../testClient';

describe('Modrinth - getVersion (Integration)', () => {
    it('should fetch a version by its ID', async () => {
        const versionId = 'flEannHL'; // fabric-api

        const version = await testClient.getVersion(versionId);

        expect(version.id).toBe(versionId);
    });

    it('should throw an error if the version does not exist', async () => {
        const versionId = 'flEannHM';

        await expect(testClient.getVersion(versionId)).rejects.toThrow(
            'Version not found'
        );
    });
});
