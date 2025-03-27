import MROptions, { getDefaultOptions } from './interfaces/MROptions';
import { URL } from 'url';
import { GetProjectRoute } from './routes/projects/GetProjectRoute';
import { Project, SearchResult } from './interfaces/project';
import { GetMultipleProjectsRoute } from './routes/projects/GetMultipleProjectsRoute';
import CacheManager from './util/CacheManager';
import { GetRandomProjects } from './routes/projects/GetRandomProjects';
import { Range0to100 } from './types/Range';
import { CheckProjectValidityRoute } from './routes/projects/CheckProjectValidityRoute';
import ModrinthStatistics from './interfaces/miscellaneous/ModrinthStatistics';
import StatisticsRoute from './routes/miscellaneous/StatisticsRoute';
import SearchProjectRoute from './routes/projects/SearchProjectRoute';
import SearchOptions from './interfaces/project/search/SearchOptions';
import { User } from './interfaces/users';
import GetUserRoute from './routes/users/GetUserRoute';
import GetMultipleUsersRoute from './routes/users/GetMultipleUsersRoute';
import GetUserProjectsRoute from './routes/users/GetUserProjectsRoute';
import { TagType } from './enums/TagType';
import { TagTypeMapping } from './types/TagTypeMapping';
import GetTagRoute from './routes/tags/GetTagRoute';
import { FullLicense } from './interfaces/tags';
import GetLicenseRoute from './routes/tags/GetLicenseRoute';
import {
    ProjectVersion,
    ProjectVersionFromHashOptions,
    ProjectVersionSearchOptions,
} from './interfaces/version';
import GetProjectVersionsRoute from './routes/versions/GetProjectVersionsRoute';
import GetVersionRoute from './routes/versions/GetVersionRoute';
import GetMultipleVersionsRoute from './routes/versions/GetMultipleVersionsRoute';
import GetVersionFromFileHashRoute from './routes/versions/GetVersionFromFileHashRoute';
import {
    ApiError,
    ProjectNotFoundError,
    UnexpectedApiError,
    UserNotFoundError,
    UserProjectsNotFoundError,
    LicenseNotFoundError,
    VersionNotFoundError,
} from './errors';
import GetAuthUserRoute from './routes/users/GetAuthUserRoute';
import { GetTokenResponse } from './interfaces/auth';
import GetTokenRoute from './routes/auth/GetTokenRoute';
import { AuthScope } from './enums/AuthScope';
import { TeamMember } from './interfaces/teams';
import GetProjectTeamMembersRoute from './routes/teams/GetProjectTeamMembers';
import GetTeamMembersRoute from './routes/teams/GetTeamMembers';
import GetMultipleTeamsMembers from './routes/teams/GetMultipleTeamsMembers';
import GetFollowedProjectsRoute from './routes/users/GetFollowedProjectsRoute';

/**
 * The main class for the Modrinth API
 *
 * @example
 * import { Modrinth } from "typerinth";
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
     * @example
     * const modrinth = new Modrinth({
     *     baseUrl: 'https://api.modrinth.com',
     *     apiVersion: 'v2',
     *     userAgent: 'AppName/Version',
     *     cache: {
     *         ttl: 600,
     *         checkperiod: 120,
     *         useCache: true,
     *     },
     * });
     */
    constructor(options: MROptions = {}) {
        this.options = {
            ...getDefaultOptions(),
            ...options,
        };
        this.options.cache = {
            ...getDefaultOptions().cache,
            ...options.cache,
        };
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
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @returns The search results
     * @category Projects
     * @example
     * const result = await modrinth.search('life', {
     *     limit: 3,
     *     index: SearchIndex.Downloads,
     *     facets: new SearchFacets(
     *         new FacetGroup(
     *             new Facet(FacetType.Categories, FacetOperation.EQUALS, 'forge')
     *         ),
     *         new FacetGroup(
     *             new Facet(FacetType.Versions, FacetOperation.EQUALS, '1.16.5'),
     *             new Facet(FacetType.Versions, FacetOperation.EQUALS, '1.17.1')
     *         )
     *     ),
     * });
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
     * @throws {} {@link ProjectNotFoundError} If the project with the given ID or slug does not exist
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Projects
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
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Projects
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
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Projects
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
     * @returns Whether the project is valid
     * @category Projects
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
     * @throws {} {@link VersionNotFoundError} If there are no versions for the project
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Versions
     */
    getProjectVersions(
        projectId: string,
        options: ProjectVersionSearchOptions = {}
    ): Promise<ProjectVersion[]> {
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
     * @throws {} {@link VersionNotFoundError} If the version with the given ID does not exist
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Versions
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
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Versions
     */
    getVersions(versionIds: string[]): Promise<ProjectVersion[]> {
        return new GetMultipleVersionsRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            versionIds
        ).getData();
    }

    /**
     * Get a version from a file hash
     * @param fileHash The hash of the file to get the version of
     * @param options Options for the search
     * @returns The version with the given file hash
     * @throws {} {@link VersionNotFoundError} If the version with the given file hash does not exist
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Versions
     */
    getVersionFromFileHash(
        fileHash: string,
        options: ProjectVersionFromHashOptions = {}
    ): Promise<ProjectVersion> {
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
     * @throws {} {@link UserNotFoundError} If the user with the given ID or username does not exist
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Users
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
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Users
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
     * @throws {} {@link UserProjectsNotFoundError} If the user's projects do not exist
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Users
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
     * Get the projects followed by a user
     *
     * **Rquires authorization** with scope:
     * > `USER_READ`
     * @param userId The ID or username of the user to get the followed projects of
     * @throws {} {@link UserNotFoundError} If the user with the given ID or username does not exist
     * @throws {} {@link ApiError} If an error occurs
     * @category Users
     */
    getFollowedProjects(userId: string): Promise<Project[]> {
        return new GetFollowedProjectsRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            this.options.authorization,
            userId
        ).getData();
    }

    /**
     * Get the user that is authenticated with the authorization header
     *
     * **Rquires authorization** with scope:
     * > `USER_READ`
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @returns The authenticated user
     * @category Users
     */
    getAuthUser(): Promise<User> {
        return new GetAuthUserRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            this.options.authorization
        ).getData();
    }

    /**
     * Get the team members of a project
     *
     * @param projectId The ID or slug of the project to get the team members of
     * @throws {} {@link ProjectNotFoundError} If the project with the given ID or slug does not exist
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @returns The team members of the project with the given ID or slug
     * @category Teams
     */
    getProjectTeamMembers(projectId: string): Promise<TeamMember[]> {
        return new GetProjectTeamMembersRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            this.options.authorization,
            projectId
        ).getData();
    }

    /**
     * Get the team members of a team
     *
     * @param teamId The ID of the team to get the members of
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @returns The team members of the team with the given ID
     * @category Teams
     */
    getTeamMembers(teamId: string): Promise<TeamMember[]> {
        return new GetTeamMembersRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            this.options.authorization,
            teamId
        ).getData();
    }

    /**
     * Get the members of multiple teams
     *
     * @param teamIds The IDs of the teams to get the members of
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @returns The members of the teams with the given IDs
     * @category Teams
     */
    getMultipleTeamMembers(teamIds: string[]): Promise<TeamMember[][]> {
        return new GetMultipleTeamsMembers(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            this.options.authorization,
            teamIds
        ).getData();
    }

    /**
     * Get a tag by its type
     * @param tagType The type of the tag to get
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Tags
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
     * @throws {} {@link LicenseNotFoundError} If the license with the given ID does not exist
     * @throws {} {@link ApiError} If an error occurs
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Tags
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
     * @throws {} {@link UnexpectedApiError} If an unexpected error occurs
     * @category Miscellaneous
     */
    getStatistics(): Promise<ModrinthStatistics> {
        return new StatisticsRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager
        ).getData();
    }

    /**
     * Get an access token from an authorization code
     *
     * (Rquest to `https://api.modrinth.com/_internal/oauth/token`)
     *
     * [Modrinth OAuth Guide](https://github.com/modrinth/code/pull/3342/files)
     * @param code The authorization code gotten from the authorization URL
     * @param clientId The ID of the client
     * @param redirectUri The uri to redirect to after getting the token (must be listed in the client's redirect URIs)
     * @returns The access token and other token information
     * @category Auth
     */
    getToken(
        code: string,
        clientId: string,
        redirectUri: string
    ): Promise<GetTokenResponse> {
        return new GetTokenRoute(
            this.getApiUrl(),
            this.options.userAgent,
            this.cacheManager,
            this.options.authorization,
            code,
            clientId,
            redirectUri
        ).getData();
    }

    /**
     * Generate an authorization URL to get an authorization code
     *
     * [Modrinth OAuth Guide](https://github.com/modrinth/code/pull/3342/files)
     * @param clientId The ID of the client
     * @param redirectUri The uri to redirect to with the authorization code (must be listed in the client's redirect URIs)
     * @param scopes The scopes to request authorization for (must be listed in the client's scopes)
     * @returns The URL to get the authorization code
     * @category Auth
     *
     * @example
     * new Modrinth().generateAuthorizationUrl(
     *     CLIENT_ID,
     *     "https://example.com/auth/callback",
     *     [AuthScope.UserRead, AuthScope.PayoutsRead]
     * );
     */
    generateAuthorizationUrl(
        clientId: string,
        redirectUri: string,
        scopes: AuthScope[]
    ): string {
        const url = new URL('https://modrinth.com/auth/authorize');
        url.searchParams.append('client_id', clientId);
        url.searchParams.append('redirect_uri', redirectUri);
        url.searchParams.append('scope', scopes.join('+'));
        return url.toString();
    }
}
