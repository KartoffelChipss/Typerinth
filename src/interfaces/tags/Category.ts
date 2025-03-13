export default interface Category {
    /** The SVG icon of a category */
    icon: string;

    /** The name of the category */
    name: string;

    /** The project type this category is applicable to */
    project_type: string;

    /** The header under which the category should go */
    header: string;
}
