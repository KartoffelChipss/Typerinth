export default interface Loader {
    /** The SVG icon of a loader */
    icon: string;

    /** The name of the loader */
    name: string;

    /** The project types that this loader is applicable to */
    supported_project_types: string[];
}
