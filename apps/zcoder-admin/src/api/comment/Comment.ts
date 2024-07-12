import { Solution } from "../solution/Solution";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  commentText: string | null;
  timestamp: Date | null;
  user: string | null;
  solution?: Solution | null;
};
