import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CodingContestService } from "./codingContest.service";
import { CodingContestControllerBase } from "./base/codingContest.controller.base";

@swagger.ApiTags("codingContests")
@common.Controller("codingContests")
export class CodingContestController extends CodingContestControllerBase {
  constructor(protected readonly service: CodingContestService) {
    super(service);
  }
}
