import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SolutionServiceBase } from "./base/solution.service.base";

@Injectable()
export class SolutionService extends SolutionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
