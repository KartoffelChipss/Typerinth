export default interface GameVersion {
    /** The name/number of the game version */
    version: string;

    /** The type of the game version */
    version_type: string;

    /** The date of the game version release */
    date: string;

    /** Whether or not this is a major version, used for Featured Versions */
    major: boolean;
}
