import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";

export default class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new nodejs.NodejsFunction(this, "MyFunction", {
      // currentVersionOptions: { removalPolicy: cdk.RemovalPolicy.RETAIN },
    });

    new lambda.Alias(this, "v11-alias", {
      aliasName: "v11",
      version: new lambda.Version(this, "v11", {
        lambda: fn,
      }),
    });

    new lambda.Alias(this, "v12-alias", {
      aliasName: "v12",
      version: new lambda.Version(this, "v12", {
        lambda: fn,
      }),
    });

    new lambda.Version(this, "v13", {
      lambda: fn,
    }).addAlias("v13");
  }
}
