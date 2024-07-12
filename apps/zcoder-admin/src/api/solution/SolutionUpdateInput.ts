import { CommentUpdateManyWithoutSolutionsInput } from "./CommentUpdateManyWithoutSolutionsInput";

export type SolutionUpdateInput = {
  user?: string | null;
  questionId?: number | null;
  solutionText?: string | null;
  timestamp?: Date | null;
  comments?: CommentUpdateManyWithoutSolutionsInput;
};
