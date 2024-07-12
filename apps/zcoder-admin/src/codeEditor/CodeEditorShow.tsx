import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CodeEditorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="editorID" source="editorId" />
        <TextField label="programmingLanguage" source="programmingLanguage" />
        <TextField label="codeContent" source="codeContent" />
      </SimpleShowLayout>
    </Show>
  );
};
