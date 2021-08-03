/* eslint-disable import/prefer-default-export */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserIput {
  @Field()
  id!: string;

  @Field()
  tag!: string;

  @Field()
  avatar!: string;
}