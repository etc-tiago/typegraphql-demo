import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";

import { buildSchema, Resolver, Query } from "type-graphql";

@Resolver()
class HelloResolvers {
  @Query(() => String)
  async hello() {
    return "Hello, World!";
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolvers],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => console.log("Running on 4000"));
};

main();
