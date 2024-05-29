import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TmVpcBase } from '../../../src';
import { IVpc } from 'aws-cdk-lib/aws-ec2';


export class CdkVpcbaseStack extends cdk.Stack {
  public readonly vpc: IVpc;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    this.vpc = new TmVpcBase(this, 'Vpc-CDK', {
        rangeCidr: '10.1.0.0/16',
    /*
      rangeCidr: '10.0.1.0/16',
      enableEndpoints: [ 's3' ],
    */
      });
  }
  
}