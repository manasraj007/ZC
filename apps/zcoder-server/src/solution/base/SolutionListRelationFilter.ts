/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SolutionWhereInput } from "./SolutionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SolutionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SolutionWhereInput,
  })
  @ValidateNested()
  @Type(() => SolutionWhereInput)
  @IsOptional()
  @Field(() => SolutionWhereInput, {
    nullable: true,
  })
  every?: SolutionWhereInput;

  @ApiProperty({
    required: false,
    type: () => SolutionWhereInput,
  })
  @ValidateNested()
  @Type(() => SolutionWhereInput)
  @IsOptional()
  @Field(() => SolutionWhereInput, {
    nullable: true,
  })
  some?: SolutionWhereInput;

  @ApiProperty({
    required: false,
    type: () => SolutionWhereInput,
  })
  @ValidateNested()
  @Type(() => SolutionWhereInput)
  @IsOptional()
  @Field(() => SolutionWhereInput, {
    nullable: true,
  })
  none?: SolutionWhereInput;
}
export { SolutionListRelationFilter as SolutionListRelationFilter };
