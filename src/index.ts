import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { RegisterResolvers } from "./modules/users/Register";

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [RegisterResolvers],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => console.log("Running on 4000"));
};

main();
