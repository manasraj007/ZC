export type CodingContest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contestName: string | null;
  startTime: Date | null;
  endTime: Date | null;
  platform: string | null;
};
