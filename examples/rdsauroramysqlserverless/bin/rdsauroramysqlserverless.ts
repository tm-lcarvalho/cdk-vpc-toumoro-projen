#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkRdsglobalStack } from '../lib/rdsAuroraMysqlServerlessStack';
import { CdkVpcbaseStack } from '../lib/vpcBaseStack';
import { BastionStack } from '../lib/bastionStack';
import { AwsSolutionsChecks, NagSuppressions } from 'cdk-nag';
import { Aspects } from 'aws-cdk-lib';

const app = new cdk.App();

const vpcStack = new CdkVpcbaseStack(app, 'CdkVpcbaseStack');

const bastionStack = new BastionStack(app, 'BastionStack', {
  vpc: vpcStack.vpc,
});

const rdsGlobal = new CdkRdsglobalStack(app, 'CdkRdsglobalStack', {
  vpc: vpcStack.vpc,
  bastionHost: bastionStack.securityGroupBastion,
});

Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }))

NagSuppressions.addStackSuppressions(vpcStack, [
  { id: 'AwsSolutions-VPC7', reason: 'Thats is not a solution and just a test' },
]);

NagSuppressions.addStackSuppressions(bastionStack, [
  { id: 'AwsSolutions-IAM5', reason: 'Thats is not a solution and just a test' },
  { id: 'AwsSolutions-EC26', reason: 'Thats is not a solution and just a test' },
  { id: 'AwsSolutions-EC28', reason: 'Thats is not a solution and just a test' },
  { id: 'AwsSolutions-EC29', reason: 'Thats is not a solution and just a test' },
]);

NagSuppressions.addStackSuppressions(rdsGlobal, [
  { id: 'AwsSolutions-SMG4', reason: 'Thats is not a solution and just a test' },
  { id: 'AwsSolutions-RDS2', reason: 'Thats is not a solution and just a test' },
  { id: 'AwsSolutions-RDS6', reason: 'Thats is not a solution and just a test' },
  { id: 'AwsSolutions-RDS10', reason: 'Thats is not a solution and just a test' },
  { id: 'AwsSolutions-RDS11', reason: 'Thats is not a solution and just a test' },
  { id: 'AwsSolutions-RDS14', reason: 'Thats is not a solution and just a test' },
  { id: 'AwsSolutions-IAM4', reason: 'Thats is not a solution and just a test' },

]);

app.synth();