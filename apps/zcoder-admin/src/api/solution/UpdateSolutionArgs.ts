import { SolutionWhereUniqueInput } from "./SolutionWhereUniqueInput";
import { SolutionUpdateInput } from "./SolutionUpdateInput";

export type UpdateSolutionArgs = {
  where: SolutionWhereUniqueInput;
  data: SolutionUpdateInput;
};
