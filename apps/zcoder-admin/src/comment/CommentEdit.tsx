import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SolutionTitle } from "../solution/SolutionTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="commentText" multiline source="commentText" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="user" source="user" />
        <ReferenceInput
          source="solution.id"
          reference="Solution"
          label="solution"
        >
          <SelectInput optionText={SolutionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
