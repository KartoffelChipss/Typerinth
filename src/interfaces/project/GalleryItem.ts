/**
 * Represents a gallery image for a project on Modrinth.
 */
export default interface GalleryItem {
    /** The URL of the gallery image. */
    url: string;

    /** Whether the image is featured in the gallery. */
    featured: boolean;

    /** The title of the gallery image. */
    title: string | null;

    /** The description of the gallery image. */
    description: string | null;

    /** The date the gallery image was created. */
    created: string;

    /** The order of the gallery image. Gallery images are sorted by this field and then alphabetically by title. */
    ordering: number;
}
