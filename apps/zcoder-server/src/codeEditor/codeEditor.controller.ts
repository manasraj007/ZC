import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CodeEditorService } from "./codeEditor.service";
import { CodeEditorControllerBase } from "./base/codeEditor.controller.base";

@swagger.ApiTags("codeEditors")
@common.Controller("codeEditors")
export class CodeEditorController extends CodeEditorControllerBase {
  constructor(protected readonly service: CodeEditorService) {
    super(service);
  }
}
