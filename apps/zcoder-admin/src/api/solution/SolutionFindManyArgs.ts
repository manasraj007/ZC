import { SolutionWhereInput } from "./SolutionWhereInput";
import { SolutionOrderByInput } from "./SolutionOrderByInput";

export type SolutionFindManyArgs = {
  where?: SolutionWhereInput;
  orderBy?: Array<SolutionOrderByInput>;
  skip?: number;
  take?: number;
};
