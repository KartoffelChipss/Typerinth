export class ApiError extends Error {
    constructor(error: string, description: string) {
        super(`API error: ${error} - ${description}`);
        this.name = 'ApiError';
    }
}
