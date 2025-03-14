import { testClient } from '../testClient';

describe('Modrinth - getUser (Integration)', () => {
    it('should fetch a user by username or ID', async () => {
        const username = 'Geometrically';

        const user = await testClient.getUser(username);

        expect(user.username).toBe(username);
    });

    it('should throw an error if the user does not exist', async () => {
        const username = 'this-user-hopfully-does-not-exist';

        await expect(testClient.getUser(username)).rejects.toThrow(
            'User not found'
        );
    });
});
