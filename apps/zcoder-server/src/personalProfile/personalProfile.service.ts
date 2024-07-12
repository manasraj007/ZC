import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalProfileServiceBase } from "./base/personalProfile.service.base";

@Injectable()
export class PersonalProfileService extends PersonalProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
