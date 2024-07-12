import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  roomName?: SortOrder;
  description?: SortOrder;
  participants?: SortOrder;
};
