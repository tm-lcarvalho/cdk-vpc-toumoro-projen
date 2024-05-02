import * as cdk from 'aws-cdk-lib';
import { VpcBase } from '../src';


test('VPCBase Construct creates a VPC with the specified CIDR block', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  // Instantiate the VPC construct with a specific CIDR block
  new VpcBase(stack, 'MyVpc', {
    cidr: '10.0.0.0/16', // Specify the CIDR block for the VPC
    // You can pass any other required properties here
  });

});
