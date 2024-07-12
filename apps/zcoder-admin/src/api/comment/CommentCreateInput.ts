import { SolutionWhereUniqueInput } from "../solution/SolutionWhereUniqueInput";

export type CommentCreateInput = {
  commentText?: string | null;
  timestamp?: Date | null;
  user?: string | null;
  solution?: SolutionWhereUniqueInput | null;
};
