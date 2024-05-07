import { CfnOutput } from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws_codepipeline_actions';
import { Construct } from 'constructs';

export interface PipelineProps {
  readonly pipelineName: string;
}

export class Pipeline extends Construct {
  public readonly pipeline: codepipeline.Pipeline;

  constructor(scope: Construct, id: string, props: PipelineProps) {
    super(scope, id);

    // Create a pipeline
    this.pipeline = new codepipeline.Pipeline(this, 'Pipeline', {
      pipelineName: props.pipelineName,
      stages: [
        {
          stageName: 'Source',
          actions: [
            new codepipeline_actions.GitHubSourceAction({
              actionName: 'GitHub_Source',
              owner: 'tm-lcarvalho',
              repo: 'cdk-vpc-toumoro-projen',
              oauthToken: cdk.SecretValue.secretsManager('github-token'),
              output: new codepipeline.Artifact(),
            }),
          ],
        },
        {
          stageName: 'Build',
          actions: [
            new codepipeline_actions.CodeBuildAction({
              actionName: 'CodeBuild',
              project: new codepipeline_actions.PipelineProject(this, 'CodeBuildProject', {
                projectName: 'CodeBuildProject',
                buildSpec: codepipeline_actions.BuildSpec.fromObject({
                  version: '0.2',
                  phases: {
                    install: {
                      commands: ['npm install'],
                    },
                    build: {
                      commands: ['npm run build'],
                    },
                  },
                }),
              }),
              input: new codepipeline.Artifact(),
              outputs: [new codepipeline.Artifact()],
            }),
          ],
        },
      ],
    });

    new CfnOutput(this, 'PipelineName', {
      value: this.pipeline.pipelineName,
      description: 'Pipeline Name',
    });



  }
}
