import Dependency from './Dependency';
import VersionFile from './VersionFile';

/**
 * Represents a version of a project on Modrinth
 */
export default interface ProjectVersion {
    /** The name of this version */
    name: string;

    /** The version number. Ideally will follow semantic versioning */
    version_number: string;

    /** The changelog for this version */
    changelog: string | null;

    /** A list of specific versions of projects that this version depends on */
    dependencies: Dependency[];

    /** A list of versions of Minecraft that this version supports */
    game_versions: string[];

    /** The release channel for this version */
    version_type: 'release' | 'beta' | 'alpha';

    /** The mod loaders that this version supports. In case of resource packs, use “minecraft” */
    loaders: string[];

    /** Whether the version is featured or not */
    featured: boolean;

    status:
        | 'listed'
        | 'archived'
        | 'draft'
        | 'unlisted'
        | 'scheduled'
        | 'unknown';

    requested_status: 'listed' | 'archived' | 'draft' | 'unlisted' | null;

    /** The ID of the version, encoded as a base62 string */
    id: string;

    /** The ID of the project this version is for */
    project_id: string;

    /** The ID of the author who published this version */
    author_id: string;

    date_published: string;

    /** The number of times this version has been downloaded */
    downloads: number;

    /**
     * A link to the changelog for this version. Always null, only kept for legacy compatibility.
     * @deprecated Use the `changelog` field instead
     */
    changelog_url: string | null;

    /** A list of files available for download for this version */
    files: VersionFile[];
}
