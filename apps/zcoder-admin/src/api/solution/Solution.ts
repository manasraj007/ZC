import { Comment } from "../comment/Comment";

export type Solution = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: string | null;
  questionId: number | null;
  solutionText: string | null;
  timestamp: Date | null;
  comments?: Array<Comment>;
};
