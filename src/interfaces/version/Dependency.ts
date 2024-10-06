export default interface Dependency {
    version_id: string|null;
    project_id: string|null;
    file_name: string|null;
    dependency_type: 'required' | 'optional' | 'incompatible' | 'embedded';
}