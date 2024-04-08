import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc } from '../src';

describe('Vpc', () => {
  it('Should match snapshot', () => {
    // Given
    const app = new App();
    const stack = new Stack(app, 'Network', { env: { region: 'us-east-1', account: '123456789012' } });
    new Vpc(stack, 'Vpc');

    // When
    const template = Template.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();
  });

});