import { CodingContestWhereInput } from "./CodingContestWhereInput";
import { CodingContestOrderByInput } from "./CodingContestOrderByInput";

export type CodingContestFindManyArgs = {
  where?: CodingContestWhereInput;
  orderBy?: Array<CodingContestOrderByInput>;
  skip?: number;
  take?: number;
};
