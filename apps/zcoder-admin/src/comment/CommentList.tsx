import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SOLUTION_TITLE_FIELD } from "../solution/SolutionTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
