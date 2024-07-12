import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CodingContestServiceBase } from "./base/codingContest.service.base";

@Injectable()
export class CodingContestService extends CodingContestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
