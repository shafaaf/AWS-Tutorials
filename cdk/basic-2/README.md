# CDK Basic project 2

## Lambda whic calls DynamoDB using cdk

The `cdk.json` file tells the CDK Toolkit how to execute your app.

Video: https://www.youtube.com/watch?v=CeqwpYhlHbQ&t=556s&ab_channel=FooBarServerless
Code: https://github.com/mavi888/cdk-typescript-lambda

## Commands I ran:
cdk bootstrap
cdk synth
cdk deploy
To update: cdk deploy

Requests - get from Function URLInfo on AWS lamda:
POST https://4ddcbg73f5cbwiqlm5m6on73qe0caksr.lambda-url.us-east-1.on.aws/?name=Shafaaf - creates a greeting
GET https://4ddcbg73f5cbwiqlm5m6on73qe0caksr.lambda-url.us-east-1.on.aws/?name=Shafaaf - checks if greeting done for person

