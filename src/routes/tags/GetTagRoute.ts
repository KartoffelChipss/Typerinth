import { Route } from '../Route';
import { URL } from 'url';
import CacheManager from '../../util/CacheManager';
import { TagType } from '../../enums/TagType';
import { TagTypeMapping } from '../../types/TagTypeMapping';
import { ApiError, UnexpectedApiError } from '../../errors';

export default class GetTagRoute<T extends TagType> extends Route<
    TagTypeMapping[T]
> {
    private tagType: string;

    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        tagType: T
    ) {
        super(baseUrl, ua, cacheManager);
        this.tagType = tagType;
    }

    getCacheKey(): string | null {
        return `tags:${this.tagType}`;
    }

    getUrl(): URL {
        return Route.addPathSegment(this.baseUrl, `/tag/${this.tagType}`);
    }

    parseData(data: any): TagTypeMapping[T] {
        if (!data) throw new UnexpectedApiError('Unexpected empty response');
        if (data.error) throw new ApiError(data.error, data.description);

        return data as TagTypeMapping[T];
    }
}
