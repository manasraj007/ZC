import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BookmarkWhereInput = {
  id?: StringFilter;
  questionId?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: StringNullableFilter;
};
