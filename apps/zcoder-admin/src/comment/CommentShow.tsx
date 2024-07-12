import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SOLUTION_TITLE_FIELD } from "../solution/SolutionTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
