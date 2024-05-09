import { CfnOutput } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';


export interface IVpcBase {
  readonly cidr: string; // CIDR block for the VPC
  readonly maxAzs?: number;
  readonly natGateways?: number; // Maximum availability zones
  // Define any other properties you want to pass to the VPC construct
}

export class VpcBase extends Construct {
  public readonly vpc: ec2.Vpc;

  constructor(scope: Construct, id: string, props: IVpcBase) {
    super(scope, id);

    // Create a VPC
    this.vpc = new ec2.Vpc(this, 'VpcBase', {
      // Default CIDR block for the VPC
      ipAddresses: ec2.IpAddresses.cidr(props.cidr),
      maxAzs: props.maxAzs, // Maximum availability zones
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'PublicSubnet',
          subnetType: ec2.SubnetType.PUBLIC, // Public subnet
        },
        {
          cidrMask: 24,
          name: 'PrivateSubnetWithNat',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS, // Private subnet
        },
        {
          cidrMask: 24,
          name: 'RDS',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED, // Private subnet
        },
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