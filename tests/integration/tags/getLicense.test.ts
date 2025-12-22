import { testClient } from '../testClient';

describe('Modrinth - getLicense (Integration)', () => {
    it('should fetch a license by its ID', async () => {
        const licenseId = 'MIT';

        const license = await testClient.getLicense(licenseId);

        expect(license.title).toBe('MIT License');
        expect(license.body).toContain(
            'Permission is hereby granted, free of charge'
        );
    });

    it('should throw an error if the lciense does not exist', async () => {
        const username = 'this-license-hopfully-does-not-exist';

        await expect(testClient.getLicense(username)).rejects.toThrow(
            'License not found'
        );
    });
});
