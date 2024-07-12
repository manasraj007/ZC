import { Solution as TSolution } from "../api/solution/Solution";

export const SOLUTION_TITLE_FIELD = "user";

export const SolutionTitle = (record: TSolution): string => {
  return record.user?.toString() || String(record.id);
};
