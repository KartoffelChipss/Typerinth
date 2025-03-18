import { JsonRequestBody } from '../../../src/util/requestbody';

describe('JsonRequestBody', () => {
    it('should return correct content type', () => {
        const data = { key1: 'value1', key2: 'value2' };
        const body = new JsonRequestBody(data);

        expect(body.getContentType()).toBe('application/json');
    });

    it('should return correctly formatted JSON body', () => {
        const data = { key1: 'value1', key2: 'value2' };
        const body = new JsonRequestBody(data);

        const expectedBody = JSON.stringify(data);
        expect(body.getFormattedBody()).toBe(expectedBody);
    });

    it('should handle empty data', () => {
        const body = new JsonRequestBody({});

        expect(body.getFormattedBody()).toBe('{}');
    });
});
