export class UnexpectedApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UnexpectedApiError';
    }
}
