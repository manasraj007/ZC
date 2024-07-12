import { SortOrder } from "../../util/SortOrder";

export type CodingContestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  contestName?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  platform?: SortOrder;
};
