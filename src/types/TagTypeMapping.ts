import { TagType } from '../enums/TagType';
import {
    Category,
    GameVersion,
    Loader,
    DonationPlatform,
} from '../interfaces/tags';
import ShortLicense from '../interfaces/tags/ShortLicense';

export type TagTypeMapping = {
    [TagType.Category]: Category[];
    [TagType.Loader]: Loader[];
    [TagType.License]: ShortLicense[];
    [TagType.GameVersion]: GameVersion[];
    [TagType.DonationPlatform]: DonationPlatform[];
    [TagType.ReportType]: string[];
    [TagType.ProjectType]: string[];
    [TagType.SideType]: string[];
};
