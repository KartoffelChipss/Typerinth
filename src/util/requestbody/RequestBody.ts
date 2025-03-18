export abstract class RequestBody {
    /**
     * Get the Content-Type of the request body.
     */
    abstract getContentType(): string;

    /**
     * Get the formatted body to send in the request.
     */
    abstract getFormattedBody(): string | null;
}
