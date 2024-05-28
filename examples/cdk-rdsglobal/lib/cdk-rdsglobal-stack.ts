import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as ssm from 'aws-cdk-lib/aws-ssm';

interface RdsGlobalProps extends cdk.StackProps {
  vpc: ec2.IVpc;
  bastionHost: ec2.SecurityGroup;
}

export class CdkRdsglobalStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: RdsGlobalProps) {
    super(scope, id, props);

    const securityGroup = new ec2.SecurityGroup(this, 'RdsSecurityGroup', {
      vpc: props.vpc,
      allowAllOutbound: true,
      securityGroupName: 'rds-security-group',
    });

    /*securityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(3306),
      'Allow inbound MySQL',
    );
    */

    const cluster = new rds.DatabaseCluster(this, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraMysql({ version: rds.AuroraMysqlEngineVersion.VER_3_05_2 }),
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
      securityGroups: [securityGroup],
      monitoringInterval: cdk.Duration.seconds(60),
      //PerformanceInsightRetention: rds.PerformanceInsightRetention.LONG_TERM,
      //backupRetention: cdk.Duration.days(7),
    });

    cluster.clusterArn;
    cluster.connections.allowFrom(props.bastionHost, ec2.Port.tcp(3306));

    cluster.metricServerlessDatabaseCapacity({
      period: cdk.Duration.minutes(10),
    }).createAlarm(this, 'capacity', {
        threshold: 1.5,
        evaluationPeriods: 3,
    });
    cluster.metricACUUtilization({
      period: cdk.Duration.minutes(10),
    }).createAlarm(this, 'alarm', {
      evaluationPeriods: 3,
      threshold: 90,
    });


    new ssm.StringParameter(this, 'clusterRdsArn', {
      // description: 'Some user-friendly description',
      // name: 'ParameterName',
      parameterName: '/RDS/Arn/Cluster',
      stringValue: cluster.clusterArn,
    });

    new ssm.StringParameter(this, 'clusterRdsHostname', {
      // description: 'Some user-friendly description',
      // name: 'ParameterName',
      parameterName: '/RDS/Endpoint/Hostname',
      stringValue: cluster.clusterEndpoint.hostname,
    });

    new rds.CfnGlobalCluster(this, 'MyCfnGlobalCluster',{
      deletionProtection: false,
      globalClusterIdentifier: 'globalClusterIdentifier',
      sourceDbClusterIdentifier: cluster.clusterArn,
    });
    
  }
}
