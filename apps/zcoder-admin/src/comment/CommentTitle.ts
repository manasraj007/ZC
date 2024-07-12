import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "user";

export const CommentTitle = (record: TComment): string => {
  return record.user?.toString() || String(record.id);
};
