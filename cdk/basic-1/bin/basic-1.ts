#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3BucketStack } from '../lib/create-s3-bucket';

const app = new cdk.App();

// Creating an S3 bucket stack
const s3_bucket_stack = new S3BucketStack(app, 's3BucketStack');

// Re-using assets
const bucket = s3_bucket_stack.bucket;
