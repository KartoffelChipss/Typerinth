/**
 * Represents the statistics of Modrinth
 */
export default interface ModrinthStatistics {
    /** Number of projects on Modrinth */
    projects: number;

    /** Number of versions on Modrinth */
    versions: number;

    /** Number of version files on Modrinth */
    files: number;

    /** Number of authors (users with projects) on Modrinth */
    authors: number;
}
