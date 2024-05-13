import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PipelineCdk } from '../../../src';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkPipelinecdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new PipelineCdk(this, 'PipelineCdk', {
      pipelineName: 'PipelineCdk',
      repoName: 'cdk-constructs',
      repoBranch: 'main',
    });
  }
}
