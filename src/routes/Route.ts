import {URL} from "url";
import CacheManager from "../util/CacheManager";

export abstract class Route<T> {
    /**
     * The base URL for the API (e.g. https://api.modrinth.com/v2)
     * @protected
     */
    protected baseUrl: URL;

    /**
     * The user agent to use for the request
     * @protected
     */
    protected ua: string|undefined;

    /**
     * The cache options for the route
     */
    protected cacheManager: CacheManager;

    /**
     * Create a new Route instance
     * @param baseUrl - The base URL for the API
     * @param ua - The user agent to use for the request
     * @param cacheManager - The cache manager to use for the route
     */
    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager) {
        this.baseUrl = baseUrl;
        this.ua = ua;
        this.cacheManager = cacheManager;
    }

    /**
     * Get the URL for the route
     */
    abstract getUrl(): URL;

    /**
     * Get the cache key for the route
     */
    abstract getCacheKey(): string|null;

    /**
     * Fetch the raw data from the url
     * @returns The data from the API
     */
    private fetchRaw(): Promise<any> {
        return fetch(
            this.getUrl().toString(),
            {
                method: "GET",
                headers: {
                    "User-Agent": this.ua ?? ""
                }
            }
        )
            .then(res => res.json())
            .then(data => data);
    };

    /**
     * Parse the data from the API
     * @param data The data from the API
     */
    abstract parseData(data: any): T;

    /**
     * Get the data from the API
     * @returns The data from the API
     */
    async getData(): Promise<T> {
        if (this.cacheManager.isEnabled() && this.getCacheKey() != null) {
            const cachedData = this.cacheManager.get(this.getCacheKey()!!);
            if (cachedData) {
                console.log("Cache hit for", this.getCacheKey());
                return cachedData;
            }
        }

        const data = this.parseData(await this.fetchRaw());

        if (this.cacheManager.isEnabled() && this.getCacheKey() != null) this.cacheManager.set(this.getCacheKey()!!, data);

        return data;
    }

    public static addPathSegment(url: URL, pathSegment: string): URL {
        url.pathname = `${url.pathname.replace(/\/$/, '')}/${pathSegment.replace(/^\//, '')}`;
        return url;
    }
}