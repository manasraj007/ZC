import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SolutionTitle } from "../solution/SolutionTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
