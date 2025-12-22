/**
 * The search sort defines how the search results are sorted.
 *
 * @property Relevance - Sort by relevance. (Default)
 * @property Downloads - Sort by downloads.
 * @property Follows - Sort by follows.
 * @property Newest - Sort by creation date.
 * @property Updated - Sort by last updated.
 */
export enum SearchSort {
    Relevance = 'relevance',
    Downloads = 'downloads',
    Follows = 'follows',
    Newest = 'newest',
    Updated = 'updated',
}
