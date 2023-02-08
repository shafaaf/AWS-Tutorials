import * as cdk from '@aws-cdk/core';
import * as s3 from "@aws-cdk/aws-s3";

export class S3BucketStack extends cdk.Stack {
    public readonly bucket: s3.Bucket;

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here

        // example resource
        // const queue = new sqs.Queue(this, 'Basic1Queue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
        this.bucket = new s3.Bucket(this, "shafaaf-cdk-demo",{
            versioned: false,
            bucketName: "shafaaf-cdk-demo-bucket",
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            removalPolicy: cdk.RemovalPolicy.DESTROY
        });
    }
}
