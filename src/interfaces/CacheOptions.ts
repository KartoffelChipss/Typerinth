export default interface CacheOptions {
    /**
     * The maximum age of the cache in seconds
     * @default 600
     */
    ttl?: number;
    /**
     * The maximum number of items to cache
     * @default 120
     */
    checkperiod?: number;
    /**
     * Whether the cache should be used
     * @default true
     */
    useCache?: boolean;
}

export function getDefaultCacheOptions(): CacheOptions {
    return {
        ttl: 600,
        checkperiod: 120,
        useCache: true,
    };
}
