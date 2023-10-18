import { Context } from "aws-lambda";

export const handler = async (_: unknown, context: Context) => {
  context.functionVersion;

  return {
    statusCode: 200,
    body: "Hello World",
    version: "v13",
  };
};
