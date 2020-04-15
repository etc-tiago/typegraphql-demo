import { Resolver, Query, Mutation, Arg } from "type-graphql";
import bycrypt from "bcryptjs";
import { User } from "../../entities/User";
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class RegisterResolvers {
  @Query(() => String)
  async hello() {
    return "Hello, World!";
  }

  @Mutation(() => User)
  async register(
    @Arg("data") { email, name, password }: RegisterInput
  ): Promise<User> {
    const passwordHash = await bycrypt.hash(password, 12);
    const user = await User.create({
      name,
      email,
      password: passwordHash,
    }).save();

    return user;
  }
}
