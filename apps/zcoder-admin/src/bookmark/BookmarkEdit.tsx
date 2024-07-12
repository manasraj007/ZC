import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BookmarkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="questionID" source="questionId" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
