import * as graphql from "@nestjs/graphql";
import { PersonalProfileResolverBase } from "./base/personalProfile.resolver.base";
import { PersonalProfile } from "./base/PersonalProfile";
import { PersonalProfileService } from "./personalProfile.service";

@graphql.Resolver(() => PersonalProfile)
export class PersonalProfileResolver extends PersonalProfileResolverBase {
  constructor(protected readonly service: PersonalProfileService) {
    super(service);
  }
}
