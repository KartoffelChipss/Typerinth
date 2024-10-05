import NodeCache from "node-cache";
import CacheOptions from "./interfaces/CacheOptions";

export default class CacheManager {
    private cache: NodeCache;
    private cacheOptions: CacheOptions;

    constructor(cacheOptions: CacheOptions) {
        this.cacheOptions = cacheOptions;
        this.cache = new NodeCache({ stdTTL: cacheOptions.ttl, checkperiod: cacheOptions.checkperiod });
    }

    /**
     * Checks if the cache is enabled
     * @returns {boolean} Whether the cache is enabled
     */
    isEnabled(): boolean {
        return this.cacheOptions.useCache ?? true;
    }

    /**
     * Gets a value from the cache
     * @param key - The key to get
     */
    get(key: string): any {
        return this.cache.get(key);
    }

    /**
     * Sets a value in the cache
     * @param key - The key to set
     * @param value - The value to set
     */
    set(key: string, value: any): void {
        this.cache.set(key, value);
    }

    /**
     * Deletes a value from the cache
     * @param key - The key to delete
     */
    delete(key: string): void {
        this.cache.del(key);
    }
}