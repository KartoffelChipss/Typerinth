export default interface SearchHit {
    slug: string;
    title: string;
    description: string;
    categories: string[];
    client_side: string;
    server_side: string;
    project_type: string;
    downloads: number;
    icon_url: string;
    color: number;
    thread_id: string;
    monetization_status: string;
    project_id: string;
    author: string;
    display_categories: string[];
    versions: string[];
    follows: number;
    date_created: string;
    date_modified: string;
    latest_version: string;
    license: string;
    gallery: string[];
    featured_gallery: string;
}