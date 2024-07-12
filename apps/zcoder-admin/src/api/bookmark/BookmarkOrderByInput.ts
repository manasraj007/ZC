import { SortOrder } from "../../util/SortOrder";

export type BookmarkOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  questionId?: SortOrder;
  timestamp?: SortOrder;
  user?: SortOrder;
};
