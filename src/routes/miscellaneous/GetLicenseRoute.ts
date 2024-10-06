import {Route} from "../Route";
import {FullLicense} from "../../interfaces/tags";
import CacheManager from "../../util/CacheManager";
import {URL} from "url";

export default class GetLicenseRoute extends Route<FullLicense> {
    private licenseId: string;

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, licenseId: string) {
        super(baseUrl, ua, cacheManager);
        this.licenseId = licenseId;
    }

    getCacheKey(): string|null {
        return `license:${this.licenseId}`;
    }

    getUrl(): URL {
        return Route.addPathSegment(this.baseUrl, `/tag/license/${this.licenseId}`);
    }

    parseData(data: any): FullLicense {
        console.log(data);
        if (!data) throw new Error("Unexpected empty response");

        if (data.error) {
            if (data.error === "not_found") throw new Error("FullLicense not found");
            throw new Error(`Unexpected error: ${data.error} (${data.description})`);
        }

        return data as FullLicense;
    }
}