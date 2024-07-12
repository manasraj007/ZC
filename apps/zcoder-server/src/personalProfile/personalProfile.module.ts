import { Module } from "@nestjs/common";
import { PersonalProfileModuleBase } from "./base/personalProfile.module.base";
import { PersonalProfileService } from "./personalProfile.service";
import { PersonalProfileController } from "./personalProfile.controller";
import { PersonalProfileResolver } from "./personalProfile.resolver";

@Module({
  imports: [PersonalProfileModuleBase],
  controllers: [PersonalProfileController],
  providers: [PersonalProfileService, PersonalProfileResolver],
  exports: [PersonalProfileService],
})
export class PersonalProfileModule {}
