import * as graphql from "@nestjs/graphql";
import { SolutionResolverBase } from "./base/solution.resolver.base";
import { Solution } from "./base/Solution";
import { SolutionService } from "./solution.service";

@graphql.Resolver(() => Solution)
export class SolutionResolver extends SolutionResolverBase {
  constructor(protected readonly service: SolutionService) {
    super(service);
  }
}
