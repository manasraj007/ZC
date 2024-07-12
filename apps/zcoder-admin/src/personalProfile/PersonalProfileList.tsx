import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PersonalProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PersonalProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="githubLink" source="githubLink" />
        <TextField label="codeforcesProfile" source="codeforcesProfile" />
        <TextField label="codechefProfile" source="codechefProfile" />
        <TextField label="atcoderProfile" source="atcoderProfile" />
        <TextField label="bio" source="bio" />
      </Datagrid>
    </List>
  );
};
