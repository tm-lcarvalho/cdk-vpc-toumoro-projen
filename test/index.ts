import { Stack } from 'aws-cdk-lib';
import { Vpc } from '../src/cdk-vpc-toumoro';

test('VPC Created', () => {
  const stack = new Stack();
  new Vpc(stack, 'MyVpc', {
    cidr: '10.0.0.0/16',
  });

  expect(stack).toHaveResource('AWS::EC2::VPC', {
    CidrBlock: '10.0.0.0/16',
  });
});