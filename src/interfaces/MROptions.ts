import CacheOptions, {getDefaultCacheOptions} from "./CacheOptions";

export default interface MROptions {
    authorization?: string;
    baseUrl?: string;
    apiVersion?: string;
    userAgent?: string;
    cache?: CacheOptions;
}

export function getDefaultOptions(): MROptions {
    return {
        baseUrl: "https://api.modrinth.com",
        apiVersion: "v2",
        userAgent: "Modrinth.js",
        cache: getDefaultCacheOptions()
    }
}