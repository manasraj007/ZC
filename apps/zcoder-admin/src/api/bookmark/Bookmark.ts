export type Bookmark = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  questionId: number | null;
  timestamp: Date | null;
  user: string | null;
};
