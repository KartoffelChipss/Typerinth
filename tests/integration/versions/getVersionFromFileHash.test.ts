import { testClient } from '../testClient';

describe('Modrinth - getVersionFromFileHash (Integration)', () => {
    it('should fetch a version from a file hash', async () => {
        const fileHash =
            '5ad7b91f3077fdd412d30b08cc93ddb625b281c3dc39b7ca24957901931807695fda045c040990e1bdd741c5bf384f21fb8c136a04ab1fb99a08b38d361fba6b';
        const version = await testClient.getVersionFromFileHash(fileHash);

        expect(version.project_id).toBe('P7dR8mSH');
    });

    it('should throw an error if the version does not exist', async () => {
        const versionId = 'THIS_IS_NOT_A_VALID_FILE_HASH';

        await expect(
            testClient.getVersionFromFileHash(versionId)
        ).rejects.toThrow('Version not found');
    });
});
