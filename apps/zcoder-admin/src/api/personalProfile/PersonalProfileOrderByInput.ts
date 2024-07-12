import { SortOrder } from "../../util/SortOrder";

export type PersonalProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  githubLink?: SortOrder;
  codeforcesProfile?: SortOrder;
  codechefProfile?: SortOrder;
  atcoderProfile?: SortOrder;
  bio?: SortOrder;
};
