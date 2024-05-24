#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkRdsglobalStack } from '../lib/cdk-rdsglobal-stack';
import { CdkVpcbaseStack } from '../lib/vpcBaseStack';


const app = new cdk.App();

const vpcStack = new CdkVpcbaseStack(app, 'CdkVpcbaseStack');

new CdkRdsglobalStack(app, 'CdkRdsglobalStack', {
  vpc: vpcStack.vpc.vpc,
});

app.synth();