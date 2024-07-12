import { CommentCreateNestedManyWithoutSolutionsInput } from "./CommentCreateNestedManyWithoutSolutionsInput";

export type SolutionCreateInput = {
  user?: string | null;
  questionId?: number | null;
  solutionText?: string | null;
  timestamp?: Date | null;
  comments?: CommentCreateNestedManyWithoutSolutionsInput;
};
