import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BookmarkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="questionID" source="questionId" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
