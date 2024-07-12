import { Module } from "@nestjs/common";
import { SolutionModuleBase } from "./base/solution.module.base";
import { SolutionService } from "./solution.service";
import { SolutionController } from "./solution.controller";
import { SolutionResolver } from "./solution.resolver";

@Module({
  imports: [SolutionModuleBase],
  controllers: [SolutionController],
  providers: [SolutionService, SolutionResolver],
  exports: [SolutionService],
})
export class SolutionModule {}
