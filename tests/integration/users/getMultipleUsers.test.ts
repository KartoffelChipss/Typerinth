import { testClient } from '../testClient';

describe('Modrinth - getUser (Integration)', () => {
    it('should fetch multiple users by username or ID', async () => {
        const usernames = ['Geometrically', 'KartoffelChipss'];

        const users = await testClient.getUsers(usernames);

        expect(users.map((u) => u.username).sort()).toEqual(usernames.sort());
    });
});
