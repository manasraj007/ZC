import { PersonalProfile as TPersonalProfile } from "../api/personalProfile/PersonalProfile";

export const PERSONALPROFILE_TITLE_FIELD = "githubLink";

export const PersonalProfileTitle = (record: TPersonalProfile): string => {
  return record.githubLink?.toString() || String(record.id);
};
