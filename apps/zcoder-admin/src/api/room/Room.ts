export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  roomName: string | null;
  description: string | null;
  participants?: Array<"Option1">;
};
