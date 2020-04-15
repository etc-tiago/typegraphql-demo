import { Resolver, Query, Mutation, Arg } from "type-graphql";
import * as bycrypt from "bcryptjs";
import { User } from "../../entities/User";

@Resolver(User)
export class RegisterResolvers {
  @Query(() => String)
  async hello() {
    return "Hello, World!";
  }

  @Mutation(() => User)
  async register(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") passwordText: string
  ): Promise<User> {
    const password = await bycrypt.hash(passwordText, 12);
    const user = await User.create({ name, email, password }).save();

    return user;
  }
}
