import { URL } from 'url';
import { FetchMethod, Route } from '../Route';
import CacheManager from '../../util/CacheManager';
import { ApiError, UnexpectedApiError } from '../../errors';
import { GetTokenResponse } from '../../interfaces/auth';
import { RequestBody, UrlEncodedRequestBody } from '../../util/requestbody';

export default class GetTokenRoute extends Route<GetTokenResponse> {
    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        authorization: string | undefined,
        private readonly code: string,
        private readonly clientId: string,
        private readonly redirectUri: string
    ) {
        super(baseUrl, ua, cacheManager, authorization);
    }

    getCacheKey(): string | null {
        return null;
    }

    getUrl(): URL {
        return Route.addPathSegment(
            new URL('https://api.modrinth.com'),
            '/_internal/oauth/token'
        );
    }

    protected getFetchMethod(): FetchMethod {
        return 'POST';
    }

    protected getFetchBody(): RequestBody | null {
        return new UrlEncodedRequestBody({
            code: this.code,
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            grant_type: 'authorization_code',
        });
    }

    parseData(data: any): GetTokenResponse {
        if (!data) throw new UnexpectedApiError('Unexpected empty response');

        if (data.error) throw new ApiError(data.error, data.description);

        return data as GetTokenResponse;
    }
}
