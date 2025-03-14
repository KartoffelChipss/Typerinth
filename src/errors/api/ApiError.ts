export class ApiError extends Error {
    private errorName: string;
    private errorDescription: string;

    constructor(error: string, description: string) {
        super(`API error: ${error} - ${description}`);
        this.name = 'ApiError';
        this.errorName = error;
        this.errorDescription = description;
    }

    /**
     * Get the error name and description returned by the API
     * @returns The error name and description in an object
     */
    public getApiError(): { error: string; description: string } {
        return {
            error: this.errorName,
            description: this.errorDescription,
        };
    }
}
