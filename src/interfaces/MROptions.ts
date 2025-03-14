import CacheOptions, { getDefaultCacheOptions } from './CacheOptions';

export default interface MROptions {
    authorization?: string;

    /**
     * The base URL of the Modrinth API
     * @default 'https://api.modrinth.com'
     */
    baseUrl?: string;

    /**
     * The API version to use
     * @default 'v2'
     */
    apiVersion?: string;

    /**
     * The user agent to use (**Recommended to change this** to avoid rate limiting)
     * * Bad: `typerinth (default user agent)`
     * * Good: `project_name`
     * * Better: `github_username/project_name/1.56.0`
     * * Best: `github_username/project_name/1.56.0 (launcher.com)` or `github_username/project_name/1.56.0 (contact@launcher.com)`
     *
     * @default 'typerinth (default user agent)'
     */
    userAgent?: string;

    /**
     * Cache options
     */
    cache?: CacheOptions;
}

export function getDefaultOptions(): MROptions {
    return {
        baseUrl: 'https://api.modrinth.com',
        apiVersion: 'v2',
        userAgent: 'typerinth (default user agent)',
        cache: getDefaultCacheOptions(),
    };
}
