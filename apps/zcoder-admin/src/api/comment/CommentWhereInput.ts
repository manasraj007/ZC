import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SolutionWhereUniqueInput } from "../solution/SolutionWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  commentText?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: StringNullableFilter;
  solution?: SolutionWhereUniqueInput;
};
