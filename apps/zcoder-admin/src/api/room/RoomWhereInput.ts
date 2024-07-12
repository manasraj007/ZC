import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  roomName?: StringNullableFilter;
  description?: StringNullableFilter;
};
