import { testClient } from '../testClient';

describe('Modrinth - searchProject (Integration)', () => {
    it('should find projects', async () => {
        const query = 'fabric';

        const result = await testClient.search(query);

        expect(result.hits).toBeDefined();
    });
});
