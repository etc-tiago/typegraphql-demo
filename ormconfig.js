module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "etc",
  database: "tg-demo",
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.ts"],
};
