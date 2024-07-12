import * as graphql from "@nestjs/graphql";
import { CodingContestResolverBase } from "./base/codingContest.resolver.base";
import { CodingContest } from "./base/CodingContest";
import { CodingContestService } from "./codingContest.service";

@graphql.Resolver(() => CodingContest)
export class CodingContestResolver extends CodingContestResolverBase {
  constructor(protected readonly service: CodingContestService) {
    super(service);
  }
}
