import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const CodeEditorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="editorID" source="editorId" />
        <TextInput label="programmingLanguage" source="programmingLanguage" />
        <TextInput label="codeContent" multiline source="codeContent" />
      </SimpleForm>
    </Edit>
  );
};
