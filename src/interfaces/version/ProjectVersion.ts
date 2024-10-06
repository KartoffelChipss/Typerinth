import Dependency from "./Dependency";
import VersionFile from "./VersionFile";

export default interface ProjectVersion {
    name: string;
    version_number: string;
    changelog: string;
    dependencies: Dependency[];
    game_versions: string[];
    version_type: 'release' | 'beta' | 'alpha';
    loaders: string[];
    featured: boolean;
    status: 'listed' | 'archived' | 'draft' | 'unlisted' | 'scheduled' | 'unknown';
    requested_status: 'listed' | 'archived' | 'draft' | 'unlisted' | null;
    id: string;
    project_id: string;
    author_id: string;
    date_published: string;
    downloads: number;
    files: VersionFile[];
}