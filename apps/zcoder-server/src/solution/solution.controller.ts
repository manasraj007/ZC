import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SolutionService } from "./solution.service";
import { SolutionControllerBase } from "./base/solution.controller.base";

@swagger.ApiTags("solutions")
@common.Controller("solutions")
export class SolutionController extends SolutionControllerBase {
  constructor(protected readonly service: SolutionService) {
    super(service);
  }
}
