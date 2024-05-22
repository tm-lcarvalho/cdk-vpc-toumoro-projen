import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';


// https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines-readme.html

// Define the properties for the Pipeline construct
export interface TmPipelineProps extends pipelines.CodePipelineProps {
//export interface TmPipelineProps extends pipelines.CodePipelineProps {
  /**
   * The name of the repository.
   */
  readonly repoName: string;
  /**
   * The branch of the repository.
   */
  readonly repoBranch: string;
}

/**
 * A CDK construct that creates a CodePipeline.
 */
export class PipelineCdk extends pipelines.CodePipeline {
  /**
   * The pipeline created by the construct.
   */

  constructor(
    scope: Construct,
    id: string,
    props: TmPipelineProps,
   ) {
    //const repository = codecommit.Repository.fromRepositoryName(this, props.repoName, props.repoName);

    const defaultProps: pipelines.CodePipeline = {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.codeCommit(
          codecommit.Repository.fromRepositoryName(
            scope,
            props.repoName,
            props.repoName
          ),
          props.repoBranch
        ),
        // Commands to run in the synth step
        installCommands: ['npm install', 'npm ci', 'npm install -g aws-cdk'],
        commands: ['npm install', 'npm ci', 'npm install -g aws-cdk', 'cdk synth'],
      }),
    };

    const mergedProps = { ...defaultProps, ...props };
    super(scope, id, mergedProps);
    //super(scope, id, mergedProps);
  }
}