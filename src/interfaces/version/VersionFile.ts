export default interface VersionFile {
    hashes: {
        sha1: string;
        sha512: string;
    };
    url: string;
    filename: string;
    primary: boolean;
    size: number;
    file_type: 'required-resource-pack' | 'optional-resource-pack' | null;
}