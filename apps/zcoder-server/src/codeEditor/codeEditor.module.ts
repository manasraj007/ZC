import { Module } from "@nestjs/common";
import { CodeEditorModuleBase } from "./base/codeEditor.module.base";
import { CodeEditorService } from "./codeEditor.service";
import { CodeEditorController } from "./codeEditor.controller";
import { CodeEditorResolver } from "./codeEditor.resolver";

@Module({
  imports: [CodeEditorModuleBase],
  controllers: [CodeEditorController],
  providers: [CodeEditorService, CodeEditorResolver],
  exports: [CodeEditorService],
})
export class CodeEditorModule {}
