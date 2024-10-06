import {Route} from "../Route";
import {URL} from "url";
import {User} from "../../interfaces/users";
import CacheManager from "../../util/CacheManager";

export default class GetMultipleUsersRoute extends Route<User[]> {
    private userIds: string[];

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, userIds: string[]) {
        super(baseUrl, ua, cacheManager);
        this.userIds = userIds;
    }

    getCacheKey(): string|null {
        return `users:${this.userIds.join(",")}`;
    }

    getUrl(): URL {
        const url = Route.addPathSegment(this.baseUrl, `/users`);
        url.searchParams.append("ids", `[${this.userIds.map(id => `"${id}"`).join(", ")}]`);
        return url;
    }

    parseData(data: any): User[] {
        if (!data) throw new Error("Unexpected empty response");

        if (data.error) {
            if (data.error === "not_found") throw new Error("Users not found");
            throw new Error(`Unexpected error: ${data.error} (${data.description})`);
        }

        return data as User[];
    }
}