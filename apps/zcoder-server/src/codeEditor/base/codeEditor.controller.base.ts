/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CodeEditorService } from "../codeEditor.service";
import { CodeEditorCreateInput } from "./CodeEditorCreateInput";
import { CodeEditor } from "./CodeEditor";
import { CodeEditorFindManyArgs } from "./CodeEditorFindManyArgs";
import { CodeEditorWhereUniqueInput } from "./CodeEditorWhereUniqueInput";
import { CodeEditorUpdateInput } from "./CodeEditorUpdateInput";

export class CodeEditorControllerBase {
  constructor(protected readonly service: CodeEditorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CodeEditor })
  async createCodeEditor(
    @common.Body() data: CodeEditorCreateInput
  ): Promise<CodeEditor> {
    return await this.service.createCodeEditor({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        editorId: true,
        programmingLanguage: true,
        codeContent: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CodeEditor] })
  @ApiNestedQuery(CodeEditorFindManyArgs)
  async codeEditors(@common.Req() request: Request): Promise<CodeEditor[]> {
    const args = plainToClass(CodeEditorFindManyArgs, request.query);
    return this.service.codeEditors({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        editorId: true,
        programmingLanguage: true,
        codeContent: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CodeEditor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async codeEditor(
    @common.Param() params: CodeEditorWhereUniqueInput
  ): Promise<CodeEditor | null> {
    const result = await this.service.codeEditor({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        editorId: true,
        programmingLanguage: true,
        codeContent: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CodeEditor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCodeEditor(
    @common.Param() params: CodeEditorWhereUniqueInput,
    @common.Body() data: CodeEditorUpdateInput
  ): Promise<CodeEditor | null> {
    try {
      return await this.service.updateCodeEditor({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          editorId: true,
          programmingLanguage: true,
          codeContent: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CodeEditor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCodeEditor(
    @common.Param() params: CodeEditorWhereUniqueInput
  ): Promise<CodeEditor | null> {
    try {
      return await this.service.deleteCodeEditor({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          editorId: true,
          programmingLanguage: true,
          codeContent: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}