export default interface CacheOptions {
    /**
     * The maximum age of the cache in seconds
     */
    ttl?: number;
    /**
     * The maximum number of items to cache
     */
    checkperiod?: number;
    /**
     * Whether the cache should be used
     */
    useCache?: boolean;
}

export function getDefaultCacheOptions(): CacheOptions {
    return {
        ttl: 600,
        checkperiod: 120,
        useCache: true
    }
}