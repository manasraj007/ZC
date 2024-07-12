import { Module } from "@nestjs/common";
import { CodingContestModuleBase } from "./base/codingContest.module.base";
import { CodingContestService } from "./codingContest.service";
import { CodingContestController } from "./codingContest.controller";
import { CodingContestResolver } from "./codingContest.resolver";

@Module({
  imports: [CodingContestModuleBase],
  controllers: [CodingContestController],
  providers: [CodingContestService, CodingContestResolver],
  exports: [CodingContestService],
})
export class CodingContestModule {}
