import PayoutData from "./PayoutData";

export default interface User {
    username: string;
    name: string | null;
    email: string | null;
    bio: string;
    payout_data: PayoutData | null;
    id: string;
    avatar_url: string;
    created: string;
    role: string;
    badges: number;
    auth_providers: string[] | null;
    email_verified: boolean | null;
    has_password: boolean | null;
    has_totp: boolean | null;
    github_id: string | null;
}