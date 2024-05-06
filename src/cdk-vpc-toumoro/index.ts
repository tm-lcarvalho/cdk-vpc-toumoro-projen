import { CfnOutput } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';


export interface IVpcBase {
  readonly cidr: string; // CIDR block for the VPC
  readonly maxAzs?: number;
  readonly natGateways?: number; // Maximum availability zones
  // Define any other properties you want to pass to the VPC construct
}

export class VpcBase extends ec2.Vpc {
  public readonly vpc: ec2.Vpc;

  constructor(scope: Construct, id: string, props: IVpcBase) {
    super(scope, id);

    // Create a VPC
    this.vpc = new ec2.Vpc(this, 'VpcBase', {
      ipAddresses: ec2.IpAddresses.cidr(props.cidr), // Default CIDR block for the VPC
      //cidr: props.cidr, // Default CIDR block for the VPC
      maxAzs: props.maxAzs, // Maximum availability zones
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'PublicSubnet',
          subnetType: ec2.SubnetType.PUBLIC, // Public subnet
        },
        {
          cidrMask: 24,
          name: 'PrivateSubnet',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS, // Private subnet
        },
        // You can add more subnet configurations as needed
      ],
      natGateways: props.natGateways !== undefined ? props.natGateways : 1, // Number of NAT gateways (for private subnets): props.natGateways | 1, // Number of NAT gateways (for private subnets)
      enableDnsHostnames: true,
      enableDnsSupport: true,
    });
    new CfnOutput(this, 'VpcId', {
      value: this.vpc.vpcId,
      description: 'VPC ID',
    });
  }
}