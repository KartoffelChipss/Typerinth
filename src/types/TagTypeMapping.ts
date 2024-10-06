import {TagType} from "../enums/TagType";
import {Category, GameVersion, Loader, DonationPlatform} from "../interfaces/tags";

export type TagTypeMapping = {
    [TagType.Category]: Category[];
    [TagType.Loader]: Loader[];
    [TagType.GameVersion]: GameVersion[];
    [TagType.DonationPlatform]: DonationPlatform[];
    [TagType.ReportType]: string[];
    [TagType.ProjectType]: string[];
    [TagType.SideType]: string[];
};