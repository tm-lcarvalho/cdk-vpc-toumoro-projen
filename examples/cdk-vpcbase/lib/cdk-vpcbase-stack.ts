import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { VpcBase } from '../../../src';

export class CdkVpcbaseStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new VpcBase(this, 'Vpc-CDK', {
      cidr: '10.0.1.0/16',
    });

  }
}
