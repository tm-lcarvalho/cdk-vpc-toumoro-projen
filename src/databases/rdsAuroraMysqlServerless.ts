import * as rds from 'aws-cdk-lib/aws-rds';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';


export interface TmRdsAuroraMysqlServerlessProps extends rds.DatabaseClusterProps{
  readonly vpc: ec2.IVpc;
  //readonly enableRead: boolean;
  readonly enableGlobal: boolean;
}

export class TmRsAuroraMysqlServerless extends rds.DatabaseCluster {
  /**
     * The Aurora Mysql Serverless created by the construct rdsAuroraMysqlServerless.
  */

  constructor(
    scope: Construct,
    id: string,
    props: TmRdsAuroraMysqlServerlessProps
  ) {

    const defaultProps: rds.DatabaseClusterProps = {
      engine: rds.DatabaseClusterEngine.auroraMysql({ 
            version: rds.AuroraMysqlEngineVersion.VER_3_05_2,
      }),
      writer: rds.ClusterInstance.serverlessV2('writer',{
            performanceInsightRetention: rds.PerformanceInsightRetention.DEFAULT,
      }),
      deletionProtection: true,
      storageEncrypted: true,
      monitoringInterval: cdk.Duration.seconds(60),
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
    };

    const mergedProps = { ...defaultProps, ...props };

    super(scope, id, mergedProps);

    if (props.enableGlobal) {
        new rds.CfnGlobalCluster(this, 'TmGlobalCluster',{
            deletionProtection: false,
            globalClusterIdentifier: 'tmGlobalCluster',
            sourceDbClusterIdentifier: this.clusterArn,
          });
    }

    new cdk.CfnOutput(this, 'ClusterWriteEndpoint', {
        value: this.clusterEndpoint.hostname,
        description: 'Cluster Write Endpoint',
      });
  
      new cdk.CfnOutput(this, 'ClusterReadEndpoint', {
        value: this.clusterReadEndpoint.hostname,
        description: 'Cluster Read Endpoint',
      });
  
      new cdk.CfnOutput(this, 'ClusterArnIdentifier', {
        value: this.clusterArn,
        description: 'Cluster ARM Identifier',
      });
  
  }
}


