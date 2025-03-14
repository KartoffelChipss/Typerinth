import { testClient } from '../testClient';

describe('Modrinth - checkProjectValidity (Integration)', () => {
    it('should return true if a project is valid', async () => {
        const projectSlug = 'fabric-api';

        const valid = await testClient.checkProjectValidity(projectSlug);

        expect(valid).toBe(true);
    });

    it('should return false if a project is invalid', async () => {
        const projectSlug = 'this-project-hopfully-does-not-exist';

        const valid = await testClient.checkProjectValidity(projectSlug);

        expect(valid).toBe(false);
    });
});
