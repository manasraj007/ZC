import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SOLUTION_TITLE_FIELD } from "./SolutionTitle";

export const SolutionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
        <TextField label="questionID" source="questionId" />
        <TextField label="solutionText" source="solutionText" />
        <TextField label="timestamp" source="timestamp" />
        <ReferenceManyField
          reference="Comment"
          target="solutionId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="commentText" source="commentText" />
            <TextField label="timestamp" source="timestamp" />
            <TextField label="user" source="user" />
            <ReferenceField
              label="solution"
              source="solution.id"
              reference="Solution"
            >
              <TextField source={SOLUTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
