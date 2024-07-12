import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PersonalProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="githubLink" source="githubLink" />
        <TextField label="codeforcesProfile" source="codeforcesProfile" />
        <TextField label="codechefProfile" source="codechefProfile" />
        <TextField label="atcoderProfile" source="atcoderProfile" />
        <TextField label="bio" source="bio" />
      </SimpleShowLayout>
    </Show>
  );
};
