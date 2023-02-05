## Basic CDK tutorial for S3 bucket

### Followed tutorials:
https://gefyra.co/preparing-your-aws-cdk-framework-in-typescript/
https://gefyra.co/creating-an-s3-bucket-with-aws-cdk-in-typescript/

Video: https://www.youtube.com/watch?v=TXXtiM8DUZc&list=PLp0uiiYgT8KxOAP_U7moyUPnTqY6KKTGY&ab_channel=JonathanMoo

Commands
```
cdk init app --language typescript
aws configure
cat ~/.aws/credentials 
cdk bootstrap --profile <profile_identifier> 
npm run build
cdk synth
cdk deploy --profile <AWS profile name>
```
