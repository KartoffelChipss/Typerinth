import { testClient } from '../testClient';

describe('Modrinth - getMultipleVersions (Integration)', () => {
    it('should fetch a version by its ID', async () => {
        const versionIds = ['flEannHL', 'dWfheG9X', 'wJT939f6']; // fabric-api, cloth-config

        const versions = await testClient.getVersions(versionIds);

        expect(versions.map((v) => v.id).sort()).toEqual(versionIds.sort());
    });
});
