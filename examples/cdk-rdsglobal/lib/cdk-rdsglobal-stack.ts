import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import { VpcBase } from '../../../src';

interface RdsGlobalProps extends cdk.StackProps {
  vpc: ec2.IVpc;
}

export class CdkRdsglobalStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: RdsGlobalProps) {
    super(scope, id, props);

    const securityGroup = new ec2.SecurityGroup(this, 'RdsSecurityGroup', {
      vpc: props.vpc,
      allowAllOutbound: true,
      securityGroupName: 'rds-security-group',
    });

    securityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(3306),
      'Allow inbound MySQL',
    );

    const cluster = new rds.DatabaseCluster(this, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraMysql({ version: rds.AuroraMysqlEngineVersion.VER_3_05_1 }),
      writer: rds.ClusterInstance.serverlessV2('writer'),
      serverlessV2MinCapacity: 8,
      serverlessV2MaxCapacity: 8,
      readers: [
        rds.ClusterInstance.serverlessV2('reader',{ scaleWithWriter: true }),
      ],
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },  
    });

    cluster.clusterArn;


    new rds.CfnGlobalCluster(this, 'MyCfnGlobalCluster',{
      deletionProtection: false,
      globalClusterIdentifier: 'globalClusterIdentifier',
      sourceDbClusterIdentifier: cluster.clusterArn,
    });
    
  }
}
