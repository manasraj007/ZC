import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PersonalProfileWhereInput = {
  id?: StringFilter;
  githubLink?: StringNullableFilter;
  codeforcesProfile?: StringNullableFilter;
  codechefProfile?: StringNullableFilter;
  atcoderProfile?: StringNullableFilter;
  bio?: StringNullableFilter;
};
