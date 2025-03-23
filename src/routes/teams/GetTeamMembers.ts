import { URL } from 'url';
import { Route } from '../Route';
import CacheManager from '../../util/CacheManager';
import { ApiError, UnexpectedApiError } from '../../errors';
import { TeamMember } from '../../interfaces/teams';
import { bitfieldToArray } from '../../enums/TeamMemberPermissions';

export default class GetTeamMembersRoute extends Route<TeamMember[]> {
    constructor(
        baseUrl: URL,
        ua: string | undefined,
        cacheManager: CacheManager,
        authorization: string | undefined,
        private teamId: string
    ) {
        super(baseUrl, ua, cacheManager, authorization);
    }

    getCacheKey(): string | null {
        return `teams:${this.teamId}:members`;
    }

    getUrl(): URL {
        return Route.addPathSegment(
            this.baseUrl,
            `/team/${this.teamId}/members`
        );
    }

    parseData(data: any): TeamMember[] {
        if (!data) throw new UnexpectedApiError('Unexpected empty response');

        if (data.error) {
            throw new ApiError(data.error, data.description);
        }

        return data.map((member: any) => ({
            team_id: member.team_id,
            user: member.user,
            role: member.role,
            permissions:
                member.permissions !== null
                    ? bitfieldToArray(member.permissions)
                    : null,
            permissions_bitfield: member.permissions,
            accepted: member.accepted,
            payouts_split: member.payouts_split,
            ordering: member.ordering,
        }));
    }
}
