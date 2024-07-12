import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CodeEditorWhereInput = {
  id?: StringFilter;
  editorId?: IntNullableFilter;
  programmingLanguage?: StringNullableFilter;
  codeContent?: StringNullableFilter;
};
