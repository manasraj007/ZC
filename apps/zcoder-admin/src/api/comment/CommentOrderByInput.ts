import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  commentText?: SortOrder;
  timestamp?: SortOrder;
  user?: SortOrder;
  solutionId?: SortOrder;
};
