import { CodeEditor as TCodeEditor } from "../api/codeEditor/CodeEditor";

export const CODEEDITOR_TITLE_FIELD = "programmingLanguage";

export const CodeEditorTitle = (record: TCodeEditor): string => {
  return record.programmingLanguage?.toString() || String(record.id);
};
