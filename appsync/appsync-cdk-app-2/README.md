## Workshop - Build an Authenticated GraphQL API on AWS with CDK

Done from: https://www.youtube.com/watch?v=DOGadkjV7Hs&ab_channel=NaderDabit
Code: https://github.com/dabit3/build-an-authenticated-api-with-cdk/tree/main

npm install outside and inside lambda function
npm run build
cdk diff
aws configure
cdk deploy

Go to user pool created
Created 2 users with emails and passwords
Create group called Admin with A capital
Add a user to that group
Go to appsync  and run queries, mutations and some will say unauthorized access
See schema.graphql to know which ones protected behind cognito user
set auth provider to cognito user and click on "login with user pools"