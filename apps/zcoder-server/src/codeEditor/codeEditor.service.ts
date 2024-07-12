import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CodeEditorServiceBase } from "./base/codeEditor.service.base";

@Injectable()
export class CodeEditorService extends CodeEditorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
