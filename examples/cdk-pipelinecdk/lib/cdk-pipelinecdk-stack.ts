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
      primaryOutputDirectory: 'examples/cdk-vpcbase/cdk.out',
      synthCommand: [ 'npm install', 
                      'cd examples/cdk-vpcbase', 
                      'npm install',
                      'npm ci',
                      'npm run build',
                      'npm install -g aws-cdk', 
                      'cdk synth', 
                      'find . -iname cdk.out', 
                      'pwd']
    });
  }
}
