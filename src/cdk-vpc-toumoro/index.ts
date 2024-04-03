import * as ec2 from 'aws-cdk-lib/aws-ec2';

// Create a VPC with 2 AZs
const vpc = new ec2.Vpc(stack, 'Vpc', { maxAzs: 2 });