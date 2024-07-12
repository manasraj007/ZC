import { SortOrder } from "../../util/SortOrder";

export type SolutionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
  questionId?: SortOrder;
  solutionText?: SortOrder;
  timestamp?: SortOrder;
};
