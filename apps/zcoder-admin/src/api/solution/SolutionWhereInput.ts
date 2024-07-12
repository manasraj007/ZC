import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type SolutionWhereInput = {
  id?: StringFilter;
  user?: StringNullableFilter;
  questionId?: IntNullableFilter;
  solutionText?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  comments?: CommentListRelationFilter;
};
