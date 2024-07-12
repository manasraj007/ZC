import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CodeEditorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="editorID" source="editorId" />
        <TextInput label="programmingLanguage" source="programmingLanguage" />
        <TextInput label="codeContent" multiline source="codeContent" />
      </SimpleForm>
    </Create>
  );
};
