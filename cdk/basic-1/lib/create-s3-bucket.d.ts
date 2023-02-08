import * as cdk from '@aws-cdk/core';
import * as s3 from "@aws-cdk/aws-s3";
export declare class S3BucketStack extends cdk.Stack {
    readonly bucket: s3.Bucket;
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps);
}
