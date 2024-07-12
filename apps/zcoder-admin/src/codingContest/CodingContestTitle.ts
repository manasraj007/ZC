import { CodingContest as TCodingContest } from "../api/codingContest/CodingContest";

export const CODINGCONTEST_TITLE_FIELD = "contestName";

export const CodingContestTitle = (record: TCodingContest): string => {
  return record.contestName?.toString() || String(record.id);
};
