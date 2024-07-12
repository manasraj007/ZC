import { PersonalProfileWhereInput } from "./PersonalProfileWhereInput";
import { PersonalProfileOrderByInput } from "./PersonalProfileOrderByInput";

export type PersonalProfileFindManyArgs = {
  where?: PersonalProfileWhereInput;
  orderBy?: Array<PersonalProfileOrderByInput>;
  skip?: number;
  take?: number;
};
