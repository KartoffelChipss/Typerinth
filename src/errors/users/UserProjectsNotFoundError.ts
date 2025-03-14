export class UserProjectsNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UserProjectsNotFoundError';
    }
}
