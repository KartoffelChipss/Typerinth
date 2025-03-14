import { Route } from '../Route';
import { FullLicense } from '../../interfaces/tags';
import CacheManager from '../../util/CacheManager';
import { URL } from 'url';
import {
    ApiError,
    LicenseNotFoundError,
    UnexpectedApiError,
} from '../../errors';

export default class GetLicenseRoute extends Route<FullLicense> {
    private licenseId: string;

    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        licenseId: string
    ) {
        super(baseUrl, ua, cacheManager);
        this.licenseId = licenseId;
    }

    getCacheKey(): string | null {
        return `license:${this.licenseId}`;
    }

    getUrl(): URL {
        return Route.addPathSegment(
            this.baseUrl,
            `/tag/license/${this.licenseId}`
        );
    }

    parseData(data: any): FullLicense {
        if (data === null) throw new LicenseNotFoundError('License not found');
        if (!data) throw new UnexpectedApiError('Unexpected empty response');

        if (data.error) {
            if (data.error === 'not_found' || data.error === 'invalid_input')
                throw new LicenseNotFoundError('License not found');
            throw new ApiError(data.error, data.description);
        }

        return data as FullLicense;
    }
}
