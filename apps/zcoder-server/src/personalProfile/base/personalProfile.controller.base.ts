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
import { PersonalProfileService } from "../personalProfile.service";
import { PersonalProfileCreateInput } from "./PersonalProfileCreateInput";
import { PersonalProfile } from "./PersonalProfile";
import { PersonalProfileFindManyArgs } from "./PersonalProfileFindManyArgs";
import { PersonalProfileWhereUniqueInput } from "./PersonalProfileWhereUniqueInput";
import { PersonalProfileUpdateInput } from "./PersonalProfileUpdateInput";

export class PersonalProfileControllerBase {
  constructor(protected readonly service: PersonalProfileService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PersonalProfile })
  async createPersonalProfile(
    @common.Body() data: PersonalProfileCreateInput
  ): Promise<PersonalProfile> {
    return await this.service.createPersonalProfile({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        githubLink: true,
        codeforcesProfile: true,
        codechefProfile: true,
        atcoderProfile: true,
        bio: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PersonalProfile] })
  @ApiNestedQuery(PersonalProfileFindManyArgs)
  async personalProfiles(
    @common.Req() request: Request
  ): Promise<PersonalProfile[]> {
    const args = plainToClass(PersonalProfileFindManyArgs, request.query);
    return this.service.personalProfiles({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        githubLink: true,
        codeforcesProfile: true,
        codechefProfile: true,
        atcoderProfile: true,
        bio: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PersonalProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async personalProfile(
    @common.Param() params: PersonalProfileWhereUniqueInput
  ): Promise<PersonalProfile | null> {
    const result = await this.service.personalProfile({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        githubLink: true,
        codeforcesProfile: true,
        codechefProfile: true,
        atcoderProfile: true,
        bio: true,
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
  @swagger.ApiOkResponse({ type: PersonalProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePersonalProfile(
    @common.Param() params: PersonalProfileWhereUniqueInput,
    @common.Body() data: PersonalProfileUpdateInput
  ): Promise<PersonalProfile | null> {
    try {
      return await this.service.updatePersonalProfile({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          githubLink: true,
          codeforcesProfile: true,
          codechefProfile: true,
          atcoderProfile: true,
          bio: true,
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
  @swagger.ApiOkResponse({ type: PersonalProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePersonalProfile(
    @common.Param() params: PersonalProfileWhereUniqueInput
  ): Promise<PersonalProfile | null> {
    try {
      return await this.service.deletePersonalProfile({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          githubLink: true,
          codeforcesProfile: true,
          codechefProfile: true,
          atcoderProfile: true,
          bio: true,
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