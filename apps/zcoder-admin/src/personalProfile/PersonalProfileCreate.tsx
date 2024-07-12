import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PersonalProfileCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="githubLink" source="githubLink" />
        <TextInput label="codeforcesProfile" source="codeforcesProfile" />
        <TextInput label="codechefProfile" source="codechefProfile" />
        <TextInput label="atcoderProfile" source="atcoderProfile" />
        <TextInput label="bio" multiline source="bio" />
      </SimpleForm>
    </Create>
  );
};
