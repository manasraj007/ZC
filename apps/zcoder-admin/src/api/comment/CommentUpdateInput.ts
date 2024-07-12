import { SolutionWhereUniqueInput } from "../solution/SolutionWhereUniqueInput";

export type CommentUpdateInput = {
  commentText?: string | null;
  timestamp?: Date | null;
  user?: string | null;
  solution?: SolutionWhereUniqueInput | null;
};
