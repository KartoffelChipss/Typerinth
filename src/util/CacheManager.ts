import NodeCache from 'node-cache';

export default class CacheManager {
    private cache: NodeCache | null;

    constructor(cache?: NodeCache | null) {
        if (cache) this.cache = cache;
        else this.cache = null;
    }

    /**
     * Checks if the cache is enabled
     * @returns {boolean} Whether the cache is enabled
     */
    isEnabled(): boolean {
        return this.cache !== null;
    }

    /**
     * Gets a value from the cache
     * @param key - The key to get
     */
    get(key: string): any {
        if (!this.cache) return null;
        return this.cache.get(key);
    }

    /**
     * Sets a value in the cache
     * @param key - The key to set
     * @param value - The value to set
     */
    set(key: string, value: any): void {
        if (!this.cache) return;
        this.cache.set(key, value);
    }

    /**
     * Deletes a value from the cache
     * @param key - The key to delete
     */
    delete(key: string): void {
        if (!this.cache) return;
        this.cache.del(key);
    }
}
