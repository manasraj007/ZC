import { SortOrder } from "../../util/SortOrder";

export type CodeEditorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  editorId?: SortOrder;
  programmingLanguage?: SortOrder;
  codeContent?: SortOrder;
};
