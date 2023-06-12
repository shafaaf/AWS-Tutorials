import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as ddb from '@aws-cdk/aws-dynamodb';
import * as lambda from '@aws-cdk/aws-lambda';
import {FieldLogLevel} from "@aws-cdk/aws-appsync/lib/graphqlapi";

export class AppsyncCdkAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Creates the AppSync API
    const api = new appsync.GraphqlApi(this, 'Api', {
      name: 'cdk-notes-appsync-api',
      schema: appsync.Schema.fromAsset('graphql/schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(365))
          }
        },
      },
      xrayEnabled: true,
      logConfig: {
        fieldLogLevel: FieldLogLevel.ALL,
        excludeVerboseContent: false
      },
    });


    // Now that we’ve created the API, we need a way to connect the GraphQL operations
    // (createNote, updateNote, listNotes, etc..) to a data source.
    // We will be doing this by mapping the operations into a Lambda function
    // that will be interacting with a DynamoDB table.
    const notesLambda = new lambda.Function(this, 'AppSyncNotesHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('lambda-fns'),
      memorySize: 1024
    });
    // Set the new Lambda function as a data source for the AppSync API
    const lambdaDs = api.addLambdaDataSource('lambdaDatasource', notesLambda);
    // Attaching the GraphQL resolvers
    // Imp: fieldname below is used in main.ts to know which one to call
    lambdaDs.createResolver({
      typeName: "Query",
      fieldName: "getNoteById"
    });
    lambdaDs.createResolver({
      typeName: "Query",
      fieldName: "listNotes"
    });
    lambdaDs.createResolver({
      typeName: "Mutation",
      fieldName: "createNote"
    });
    lambdaDs.createResolver({
      typeName: "Mutation",
      fieldName: "deleteNote"
    });
    lambdaDs.createResolver({
      typeName: "Mutation",
      fieldName: "updateNote"
    });


    // Dynamodb table
    const notesTable = new ddb.Table(this, 'CDKNotesTable', {
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'id',
        type: ddb.AttributeType.STRING,
      },
    });
    // enable the Lambda function to access the DynamoDB table (using IAM)
    notesTable.grantFullAccess(notesLambda);
    // Create an environment variable that we will use in the function code
    notesLambda.addEnvironment('NOTES_TABLE', notesTable.tableName);

    // Prints out the AppSync GraphQL endpoint to the terminal
    new cdk.CfnOutput(this, "GraphQLAPIURL", {
      value: api.graphqlUrl
    });
    // Prints out the AppSync GraphQL API key to the terminal
    new cdk.CfnOutput(this, "GraphQLAPIKey", {
      value: api.apiKey || ''
    });
    // Prints out the stack region to the terminal
    new cdk.CfnOutput(this, "Stack Region", {
      value: this.region
    });
  }
}
