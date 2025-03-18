import { URL } from 'url';
import CacheManager from '../util/CacheManager';
import { RequestBody } from '../util/requestbody/RequestBody';

export type FetchMethod =
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'PATCH'
    | 'HEAD'
    | 'OPTIONS'
    | 'CONNECT'
    | 'TRACE';

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
    protected ua: string | undefined;

    /**
     * The authorization token to use for the request
     * @protected
     */
    protected authorization: string | undefined;

    /**
     * The cache options for the route
     */
    protected cacheManager: CacheManager;

    /**
     * Create a new Route instance
     * @param baseUrl - The base URL for the API
     * @param ua - The user agent to use for the request
     * @param cacheManager - The cache manager to use for the route
     * @param authorization - The authorization token to use for the request
     */
    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        authorization?: string | undefined
    ) {
        this.baseUrl = baseUrl;
        this.ua = ua;
        this.cacheManager = cacheManager;
        this.authorization = authorization;
    }

    /**
     * Get the URL for the route
     */
    abstract getUrl(): URL;

    /**
     * Get the cache key for the route
     */
    abstract getCacheKey(): string | null;

    /**
     * Get the fetch method for the request
     * @returns The fetch method to use for the request
     * @protected
     */
    protected getFetchMethod(): FetchMethod {
        return 'GET';
    }

    /**
     * Get the body for the fetch request
     * @returns The body for the fetch request
     * @protected
     */
    protected getFetchBody(): RequestBody | null {
        return null;
    }

    /**
     * Fetch the raw data from the url
     * @returns The data from the API
     */
    private async fetchRaw(): Promise<any> {
        return fetch(this.getUrl().toString(), {
            method: this.getFetchMethod(),
            headers: {
                'User-Agent': this.ua ?? '',
                Authorization: this.authorization ?? '',
                'Content-Type': this.getFetchBody()?.getContentType() ?? '',
            },
            body: this.getFetchBody()?.getFormattedBody() ?? undefined,
        })
            .then((res) => {
                if (res.status === 404) {
                    return null;
                }

                return res.json();
            })
            .then((data) => data);
    }

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
                return cachedData;
            }
        }

        const data = this.parseData(await this.fetchRaw());

        if (this.cacheManager.isEnabled() && this.getCacheKey() != null)
            this.cacheManager.set(this.getCacheKey()!!, data);

        return data;
    }

    public static addPathSegment(url: URL, pathSegment: string): URL {
        url.pathname = `${url.pathname.replace(/\/$/, '')}/${pathSegment.replace(/^\//, '')}`;
        return url;
    }
}
