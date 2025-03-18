import { UrlEncodedRequestBody } from '../../../src/util/requestbody';

describe('UrlEncodedRequestBody', () => {
    it('should return correct content type', () => {
        const data = { key1: 'value1', key2: 'value2' };
        const body = new UrlEncodedRequestBody(data);

        expect(body.getContentType()).toBe('application/x-www-form-urlencoded');
    });

    it('should return correctly formatted URL-encoded body', () => {
        const data = { key1: 'value1', key2: 'value2' };
        const body = new UrlEncodedRequestBody(data);

        // URLSearchParams will encode spaces as "+" and special chars as "%20"
        const expectedBody = 'key1=value1&key2=value2';
        expect(body.getFormattedBody()).toBe(expectedBody);
    });

    it('should handle empty data', () => {
        const body = new UrlEncodedRequestBody({});

        expect(body.getFormattedBody()).toBe('');
    });
});
