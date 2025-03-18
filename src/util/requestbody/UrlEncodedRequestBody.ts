import { RequestBody } from './RequestBody';

/**
 * URL-encoded form request body
 */
export class UrlEncodedRequestBody extends RequestBody {
    constructor(private data: Record<string, string>) {
        super();
    }

    getContentType(): string {
        return 'application/x-www-form-urlencoded';
    }

    getFormattedBody(): string {
        return new URLSearchParams(this.data).toString();
    }
}
