import MROptions, {getDefaultOptions} from "./interfaces/MROptions";
import {URL} from "url";
import {GetProjectRoute} from "./routes/projects/GetProjectRoute";
import {Project, SearchResult} from "./interfaces/project";
import {GetMultipleProjectsRoute} from "./routes/projects/GetMultipleProjectsRoute";
import CacheManager from "./util/CacheManager";
import {GetRandomProjects} from "./routes/projects/GetRandomProjects";
import {Range, Range0to100} from "./types/Range";
import {CheckProjectValidity} from "./routes/projects/CheckProjectValidity";
import ModrinthStatistics from "./interfaces/miscellaneous/ModrinthStatistics";
import StatisticsRoute from "./routes/miscellaneous/StatisticsRoute";
import SearchProjectRoute from "./routes/projects/SearchProjectRoute";
import {SearchIndex} from "./enums/SearchIndex";
import SearchOptions from "./interfaces/project/search/SearchOptions";

/**
 * The main class for the Modrinth API
 */
export default class Modrinth {
    private options: MROptions;
    private cacheManager: CacheManager;

    /**
     * Create a new Modrinth instance
     * @param options Options for the Modrinth instance
     */
    constructor(options: MROptions = {}) {
        this.options = {
            ...getDefaultOptions(),
            ...options
        }
        this.options.cache = {
            ...getDefaultOptions().cache,
            ...options.cache
        }
        this.cacheManager = new CacheManager(this.options.cache!!);
    }

    /**
     * Get the options for the Modrinth instance
     * @returns The options for the Modrinth instance
     */
    getOptions(): MROptions {
        return this.options;
    }

    /**
     * Get the base URL for the Modrinth API
     * @returns The base URL for the Modrinth API
     */
    getApiUrl(): URL {
        return new URL(`${this.options.baseUrl}/${this.options.apiVersion}`);
    }

    /**
     * Search for projects
     * @param query The query to search for
     * @param options Options for the search
     */
    search(query: string, options?: SearchOptions): Promise<SearchResult> {
        return new SearchProjectRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            query,
            options
        ).getData();
    }

    /**
     * Get the user agent for the Modrinth API
     * @param projectId The ID or slug of the project to get
     * @returns The project with the given ID or slug
     */
    getProject(projectId: string): Promise<Project> {
        return new GetProjectRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            projectId
        ).getData();
    }

    /**
     * Get multiple projects by their IDs
     * @param projectIds The IDs or slugs of the projects to get
     */
    getProjects(projectIds: string[]): Promise<Project[]> {
        return new GetMultipleProjectsRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            projectIds
        ).getData();
    }

    /**
     * Get a random selection of projects
     * @param count The number of projects to get (between 0 and 100)
     */
    getRandomProjects(count: Range0to100): Promise<Project[]> {
        return new GetRandomProjects(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            count
        ).getData();
    }

    /**
     * Check if a project is valid
     * @param projectId The ID or slug of the project to check
     */
    checkProjectValidity(projectId: string): Promise<boolean> {
        return new CheckProjectValidity(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            projectId
        ).getData();
    }

    /**
     * Get the statistics for Modrinth
     * @returns The statistics for Modrinth
     */
    getStatistics(): Promise<ModrinthStatistics> {
        return new StatisticsRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
        ).getData();
    }
}