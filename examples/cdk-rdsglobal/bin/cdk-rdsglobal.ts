#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkRdsglobalStack } from '../lib/cdk-rdsglobal-stack';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import { GlobalAuroraRDSMaster, InstanceTypeEnum, GlobalAuroraRDSSlaveInfra } from 'cdk-aurora-globaldatabase';


const envCentral  = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'ca-central-1' };
const envWest = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' };


const app = new cdk.App();
const stackRdsMaster = new CdkRdsglobalStack(app, 'CdkRdsglobalStackMaster', {
  env: envCentral
});

const vpcPublic = new ec2.Vpc(stackRdsMaster,'defaultVpc',{
  natGateways: 0,
  maxAzs: 3,
  subnetConfiguration: [{
    cidrMask: 26,
    name: 'masterVPC2',
    subnetType: ec2.SubnetType.PUBLIC,
  }],
  // create stack main .

  });
  new GlobalAuroraRDSMaster(stackRdsMaster, 'globalAuroraRDSMaster',{
    //instanceType: InstanceTypeEnum.R5_LARGE,
    vpc: vpcPublic,
    rdsPassword: '1qaz2wsx',
    engineVersion: rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_3_05_2,})
  });
  //globaldbM.rdsCluster.connections.allowDefaultPortFrom(ec2.Peer.ipv4(`10.0.0./32`))


  const stackRdsSlave = new CdkRdsglobalStack(app, 'CdkRdsglobalStackSlave', {
    env: envWest
  });

  const vpcPublicSlave = new ec2.Vpc(stackRdsSlave,'defaultVpcSlave',{
    natGateways: 0,
    maxAzs: 3,
    subnetConfiguration: [{
      cidrMask: 26,
      name: 'slaveVPC2',
      subnetType: ec2.SubnetType.PUBLIC,
    }],
    // create stack main .
  
    });
    new GlobalAuroraRDSSlaveInfra(stackRdsSlave, 'globalAuroraRDSSlave',{
      vpc: vpcPublicSlave,subnetType:ec2.SubnetType.PUBLIC
    });

    stackRdsMaster.addDependency(stackRdsSlave);
