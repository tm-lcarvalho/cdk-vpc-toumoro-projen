import { CfnOutput, SecretValue } from 'aws-cdk-lib';
import * as pipelines  from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';


// https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines-readme.html

export interface PipelineProps {
  readonly pipelineName: string;
  readonly repoName: string;
  readonly repoBranch: string;
}

export class Pipeline extends Construct {
  public readonly pipeline: pipelines.CodePipeline;

  constructor(scope: Construct, id: string, props: PipelineProps) {
    super(scope, id);

    // Create a pipeline
    this.pipeline = new pipelines.CodePipeline(this, props.pipelineName, {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.gitHub(props.repoName, props.repoBranch),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      }),



  }
}
