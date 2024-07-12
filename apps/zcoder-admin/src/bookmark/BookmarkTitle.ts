import { Bookmark as TBookmark } from "../api/bookmark/Bookmark";

export const BOOKMARK_TITLE_FIELD = "user";

export const BookmarkTitle = (record: TBookmark): string => {
  return record.user?.toString() || String(record.id);
};
