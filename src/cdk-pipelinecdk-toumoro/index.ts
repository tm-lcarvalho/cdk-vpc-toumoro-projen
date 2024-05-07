import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';


// https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines-readme.html

export interface PipelineProps {
  readonly pipelineName: string;
  readonly repoName: string;
  readonly repoBranch: string;
}

export class PipelineCdk extends Construct {
  public readonly pipeline: pipelines.CodePipeline;

  constructor(scope: Construct, id: string, props: PipelineProps) {
    super(scope, id);
    // Define a CodeCommit repository
    const repository = codecommit.Repository.fromRepositoryName(this, props.repoName, props.repoName);

    // Create a pipeline
    this.pipeline = new pipelines.CodePipeline(this, props.pipelineName, {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.codeCommit(repository, props.repoBranch),
        // Commands to run in the synth step
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],

      }),
    });
  }
}
