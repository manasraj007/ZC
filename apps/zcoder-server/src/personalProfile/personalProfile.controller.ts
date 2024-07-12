import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PersonalProfileService } from "./personalProfile.service";
import { PersonalProfileControllerBase } from "./base/personalProfile.controller.base";

@swagger.ApiTags("personalProfiles")
@common.Controller("personalProfiles")
export class PersonalProfileController extends PersonalProfileControllerBase {
  constructor(protected readonly service: PersonalProfileService) {
    super(service);
  }
}
