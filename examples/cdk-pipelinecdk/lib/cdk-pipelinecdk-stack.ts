import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PipelineCdk } from '../../../src';
import { CdkVpcBaseStack } from '../lib/cdk-vcp-stack-example';

export class CdkPipelinecdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    new PipelineCdk(this, 'PipelineCdk', {
      pipelineName: 'PipelineCdk',
      repoName: 'cdk-constructs',
      repoBranch: 'main',
      //primaryOutput: 'examples/cdk-pipelinecdk/cdk.out',
    });
    /*// The code that defines your stack goes here
    const pipeline = new PipelineCdk(this, 'PipelineCdk', {
      pipelineName: 'PipelineCdk',
      repoName: 'cdk-constructs',
      repoBranch: 'main',
      /*primaryOutputDirectory: 'examples/cdk-pipelinecdk/cdk.out',
      synthCommand: [ 'cd examples/cdk-pipelinecdk', 
                      'npm install', 
                      'cdk synth', 
                      'find . -iname cdk.out', 
                      'pwd']
      */
     
    });
  }

}
