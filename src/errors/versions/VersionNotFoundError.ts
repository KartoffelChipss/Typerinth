export class VersionNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'VersionNotFoundError';
    }
}
