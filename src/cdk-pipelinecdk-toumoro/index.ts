//import * as codecommit from 'aws-cdk-lib/aws-codecommit';
//import * as pipelines from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';


// https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines-readme.html

// Define the properties for the Pipeline construct
export interface PipelineProps extends Construct{
  readonly pipelineName: string;
  readonly repoName: string;
  readonly repoBranch: string;
}

export class PipelineCdk extends Construct {
  //public readonly pipeline: pipelines.CodePipeline;

  constructor(scope: Construct, id: string, props: PipelineProps) {
    super(scope, id);

    console.log(props.pipelineName);
    /*
    // Define a CodeCommit repository
        const repository = codecommit.Repository.fromRepositoryName(this, props.repoName, props.repoName);

        // Create a pipeline

        this.pipeline = new pipelines.CodePipeline(this, props.pipelineName, {
          synth: new pipelines.ShellStep('Synth', {
            input: pipelines.CodePipelineSource.codeCommit(repository, props.repoBranch),
            // Commands to run in the synth step
            commands: ['npm projen', 'npx projen build', 'npx projen synth'],
          }), // Add a closing parenthesis here

        //this.pipeline.addStage({ stageName: 'Build' });
        */
  }
}
