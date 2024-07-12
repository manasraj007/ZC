import { Room as TRoom } from "../api/room/Room";

export const ROOM_TITLE_FIELD = "roomName";

export const RoomTitle = (record: TRoom): string => {
  return record.roomName?.toString() || String(record.id);
};
