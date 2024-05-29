import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { TmRsAuroraMysqlServerless } from '../../../src';

interface RdsGlobalProps extends cdk.StackProps {
  vpc: ec2.IVpc;
  bastionHost: ec2.SecurityGroup;
}

export class CdkRdsglobalStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: RdsGlobalProps) {
    super(scope, id, props);

    const cluster = new TmRsAuroraMysqlServerless(this, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraMysql({ 
        version: rds.AuroraMysqlEngineVersion.VER_3_05_2,
      }),
      serverlessV2MinCapacity: 0.5,
      serverlessV2MaxCapacity: 2,
      vpc: props.vpc,
      enableGlobal: true,
    });

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
      parameterName: '/RDS/Cluster/ARN',
      stringValue: cluster.clusterArn,
    });

    new ssm.StringParameter(this, 'clusterRdsWrite', {
      parameterName: '/RDS/Endpoint/Write',
      stringValue: cluster.clusterEndpoint.hostname,
    });

    new ssm.StringParameter(this, 'clusterRdsRead', {
      parameterName: '/RDS/Endpoint/Read',
      stringValue: cluster.clusterReadEndpoint.hostname,
    });

  }
}
