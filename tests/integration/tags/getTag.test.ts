import { TagType } from '../../../src';
import { testClient } from '../testClient';

describe('Modrinth - getTag (Integration)', () => {
    it('should get the categories tag', async () => {
        const tag = await testClient.getTag(TagType.Category);
        expect(tag).toBeDefined();
    });

    it('should get the loaders tag', async () => {
        const tag = await testClient.getTag(TagType.Loader);
        expect(tag).toBeDefined();
    });

    it('should get the game versions tag', async () => {
        const tag = await testClient.getTag(TagType.GameVersion);
        expect(tag).toBeDefined();
    });

    it('should get the licenses tag', async () => {
        const tag = await testClient.getTag(TagType.License);
        expect(tag).toBeDefined();
    });

    it('should get the donation platforms tag', async () => {
        const tag = await testClient.getTag(TagType.DonationPlatform);
        expect(tag).toBeDefined();
    });

    it('should get the report types tag', async () => {
        const tag = await testClient.getTag(TagType.ReportType);
        expect(tag).toBeDefined();
    });

    it('should get the project types tag', async () => {
        const tag = await testClient.getTag(TagType.ProjectType);
        expect(tag).toBeDefined();
    });

    it('should get the side types tag', async () => {
        const tag = await testClient.getTag(TagType.SideType);
        expect(tag).toBeDefined();
    });
});
