import MROptions, {getDefaultOptions} from "./interfaces/MROptions";
import {URL} from "url";
import {GetProjectRoute} from "./routes/projects/GetProjectRoute";
import {Project, SearchResult} from "./interfaces/project";
import {GetMultipleProjectsRoute} from "./routes/projects/GetMultipleProjectsRoute";
import CacheManager from "./util/CacheManager";
import {GetRandomProjects} from "./routes/projects/GetRandomProjects";
import {Range, Range0to100} from "./types/Range";
import {CheckProjectValidityRoute} from "./routes/projects/CheckProjectValidityRoute";
import ModrinthStatistics from "./interfaces/miscellaneous/ModrinthStatistics";
import StatisticsRoute from "./routes/miscellaneous/StatisticsRoute";
import SearchProjectRoute from "./routes/projects/SearchProjectRoute";
import SearchOptions from "./interfaces/project/search/SearchOptions";
import {User} from "./interfaces/users";
import GetUserRoute from "./routes/users/GetUserRoute";
import GetMultipleUsersRoute from "./routes/users/GetMultipleUsersRoute";
import GetUserProjectsRoute from "./routes/users/GetUserProjectsRoute";
import {TagType} from "./enums/TagType";
import {TagTypeMapping} from "./types/TagTypeMapping";
import GetTagRoute from "./routes/miscellaneous/GetTagRoute";
import {FullLicense} from "./interfaces/tags";
import GetLicenseRoute from "./routes/miscellaneous/GetLicenseRoute";
import {ProjectVersion, ProjectVersionFromHashOptions, ProjectVersionSearchOptions} from "./interfaces/version";
import GetProjectVersionsRoute from "./routes/versions/GetProjectVersionsRoute";
import GetVersionRoute from "./routes/versions/GetVersionRoute";
import GetMultipleVersionsRoute from "./routes/versions/GetMultipleVersionsRoute";
import GetVersionFromFileHashRoute from "./routes/versions/GetVersionFromFileHashRoute";

/**
 * The main class for the Modrinth API
 *
 * @example
 * import {Modrinth} from "modrinth-ts";
 *
 * const modrinth = new Modrinth();
 *
 * modrinth.search("fabric").then(console.log);
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
     * Get a project by its ID or slug
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
     * Get multiple projects by their IDs or slugs
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
        return new CheckProjectValidityRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            projectId
        ).getData();
    }

    /**
     * Get the versions of a project
     * @param projectId The ID or slug of the project to get the versions of
     * @param options Options for the search
     */
    getProjectVersions(projectId: string, options: ProjectVersionSearchOptions = {}): Promise<ProjectVersion[]> {
        return new GetProjectVersionsRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            projectId,
            options
        ).getData();
    }

    /**
     * Get a version of a project
     * @param versionId The ID of the version to get
     */
    getVersion(versionId: string): Promise<ProjectVersion> {
        return new GetVersionRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            versionId
        ).getData();
    }

    /**
     * Get multiple versions by their IDs
     * @param versionIds The IDs of the versions to get
     */
    getVersions(versionIds: string[]): Promise<ProjectVersion[]> {
        return new GetMultipleVersionsRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            versionIds
        ).getData();
    }

    getVersionFromFileHash(fileHash: string, options: ProjectVersionFromHashOptions = {}): Promise<ProjectVersion> {
        return new GetVersionFromFileHashRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            fileHash,
            options
        ).getData();
    }

    /**
     * Get a user by their ID or username
     * @param userId The ID or username of the user to get
     */
    getUser(userId: string): Promise<User> {
        return new GetUserRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            userId
        ).getData();
    }

    /**
     * Get multiple users by their IDs or usernames
     * @param userIds The IDs or usernames of the users to get
     */
    getUsers(userIds: string[]): Promise<User[]> {
        return new GetMultipleUsersRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            userIds
        ).getData();
    }

    /**
     * Get a user's projects by their ID or username
     * @param userId The ID or username of the user
     */
    getUserProjects(userId: string): Promise<Project[]> {
        return new GetUserProjectsRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            userId
        ).getData();
    }

    /**
     * Get a tag by its type
     * @param tagType The type of the tag to get
     */
    getTag<T extends TagType>(tagType: T): Promise<TagTypeMapping[T]> {
        return new GetTagRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            tagType
        ).getData();
    }

    /**
     * Get a license by its ID
     * @param licenseId The ID of the license to get
     */
    getLicense(licenseId: string): Promise<FullLicense> {
        return new GetLicenseRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            licenseId
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