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
import { CodingContestService } from "../codingContest.service";
import { CodingContestCreateInput } from "./CodingContestCreateInput";
import { CodingContest } from "./CodingContest";
import { CodingContestFindManyArgs } from "./CodingContestFindManyArgs";
import { CodingContestWhereUniqueInput } from "./CodingContestWhereUniqueInput";
import { CodingContestUpdateInput } from "./CodingContestUpdateInput";

export class CodingContestControllerBase {
  constructor(protected readonly service: CodingContestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CodingContest })
  async createCodingContest(
    @common.Body() data: CodingContestCreateInput
  ): Promise<CodingContest> {
    return await this.service.createCodingContest({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        contestName: true,
        startTime: true,
        endTime: true,
        platform: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CodingContest] })
  @ApiNestedQuery(CodingContestFindManyArgs)
  async codingContests(
    @common.Req() request: Request
  ): Promise<CodingContest[]> {
    const args = plainToClass(CodingContestFindManyArgs, request.query);
    return this.service.codingContests({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        contestName: true,
        startTime: true,
        endTime: true,
        platform: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CodingContest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async codingContest(
    @common.Param() params: CodingContestWhereUniqueInput
  ): Promise<CodingContest | null> {
    const result = await this.service.codingContest({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        contestName: true,
        startTime: true,
        endTime: true,
        platform: true,
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
  @swagger.ApiOkResponse({ type: CodingContest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCodingContest(
    @common.Param() params: CodingContestWhereUniqueInput,
    @common.Body() data: CodingContestUpdateInput
  ): Promise<CodingContest | null> {
    try {
      return await this.service.updateCodingContest({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          contestName: true,
          startTime: true,
          endTime: true,
          platform: true,
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
  @swagger.ApiOkResponse({ type: CodingContest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCodingContest(
    @common.Param() params: CodingContestWhereUniqueInput
  ): Promise<CodingContest | null> {
    try {
      return await this.service.deleteCodingContest({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          contestName: true,
          startTime: true,
          endTime: true,
          platform: true,
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