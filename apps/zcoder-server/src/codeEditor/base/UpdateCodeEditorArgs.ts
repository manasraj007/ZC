/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CodeEditorWhereUniqueInput } from "./CodeEditorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CodeEditorUpdateInput } from "./CodeEditorUpdateInput";

@ArgsType()
class UpdateCodeEditorArgs {
  @ApiProperty({
    required: true,
    type: () => CodeEditorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CodeEditorWhereUniqueInput)
  @Field(() => CodeEditorWhereUniqueInput, { nullable: false })
  where!: CodeEditorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CodeEditorUpdateInput,
  })
  @ValidateNested()
  @Type(() => CodeEditorUpdateInput)
  @Field(() => CodeEditorUpdateInput, { nullable: false })
  data!: CodeEditorUpdateInput;
}

export { UpdateCodeEditorArgs as UpdateCodeEditorArgs };
