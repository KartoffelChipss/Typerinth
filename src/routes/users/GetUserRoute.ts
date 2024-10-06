import {URL} from "url";
import {Route} from "../Route";
import {User} from "../../interfaces/users";
import CacheManager from "../../util/CacheManager";

export default class GetUserRoute extends Route<User> {
    private userId: string;

    constructor(baseUrl: URL, ua: string|undefined, cacheManager: CacheManager, userId: string) {
        super(baseUrl, ua, cacheManager);
        this.userId = userId;
    }

    getCacheKey(): string|null {
        return `user:${this.userId}`;
    }

    getUrl(): URL {
        return Route.addPathSegment(this.baseUrl, `/users`);
    }

    parseData(data: any): User {
        if (!data) throw new Error("Unexpected empty response");

        if (data.error) {
            if (data.error === "not_found") throw new Error("User not found");
            throw new Error(`Unexpected error: ${data.error} (${data.description})`);
        }

        return data as User;
    }
}