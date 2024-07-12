import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PersonalProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="githubLink" source="githubLink" />
        <TextInput label="codeforcesProfile" source="codeforcesProfile" />
        <TextInput label="codechefProfile" source="codechefProfile" />
        <TextInput label="atcoderProfile" source="atcoderProfile" />
        <TextInput label="bio" multiline source="bio" />
      </SimpleForm>
    </Edit>
  );
};
