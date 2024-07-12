import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CodingContestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="contestName" source="contestName" />
        <TextField label="startTime" source="startTime" />
        <TextField label="endTime" source="endTime" />
        <TextField label="platform" source="platform" />
      </SimpleShowLayout>
    </Show>
  );
};
