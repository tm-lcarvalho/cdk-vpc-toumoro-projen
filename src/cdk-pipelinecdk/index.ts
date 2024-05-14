import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';


// https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines-readme.html

// Define the properties for the Pipeline construct
export interface PipelineProps {
  /**
   * The name of the pipeline.
   */
  readonly pipelineName: string;

  /**
   * The name of the repository.
   */
  readonly repoName: string;

  /**
   * The branch of the repository to use.
   */
  readonly repoBranch: string;
}

/**
 * A CDK construct that creates a CodePipeline.
 */
export class PipelineCdk extends Construct {
  /**
   * The CodePipeline created by the construct.
   */
  public readonly pipeline: pipelines.CodePipeline;
  /**
   * Constructs a new instance of the PipelineCdk class.
   * @param scope The parent construct.
   * @param id The name of the construct.
   * @param props The properties for the construct.
   * @default - No default properties.
   *  */
  constructor(scope: Construct, id: string, props: PipelineProps) {
    super(scope, id);

    // Define a CodeCommit repository
    const repository = codecommit.Repository.fromRepositoryName(this, props.repoName, props.repoName);

    // Create a pipeline

    this.pipeline = new pipelines.CodePipeline(this, props.pipelineName, {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.codeCommit(repository, props.repoBranch),
        // Commands to run in the synth step
        commands: ['cd examples/cdk-vpcbase', 'npm ci', 'npm install -g aws-cdk','cdk synth'],
      }), // Add a closing parenthesis here
    });
  }
}
