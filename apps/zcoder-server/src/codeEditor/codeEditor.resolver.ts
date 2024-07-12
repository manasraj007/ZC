import * as graphql from "@nestjs/graphql";
import { CodeEditorResolverBase } from "./base/codeEditor.resolver.base";
import { CodeEditor } from "./base/CodeEditor";
import { CodeEditorService } from "./codeEditor.service";

@graphql.Resolver(() => CodeEditor)
export class CodeEditorResolver extends CodeEditorResolverBase {
  constructor(protected readonly service: CodeEditorService) {
    super(service);
  }
}
