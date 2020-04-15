import { Length, IsEmail } from "class-validator";
import { InputType, Field } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 225)
  name: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "Email já está em uso!" })
  email: string;

  @Field()
  password: string;
}
