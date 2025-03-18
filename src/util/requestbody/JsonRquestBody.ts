import { RequestBody } from './RequestBody';

/**
 * JSON request body
 */
export class JsonRequestBody extends RequestBody {
    constructor(private data: any) {
        super();
    }

    getContentType(): string {
        return 'application/json';
    }

    getFormattedBody(): string {
        return JSON.stringify(this.data);
    }
}
