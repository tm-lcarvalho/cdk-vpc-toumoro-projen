import { awscdk } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'tm-lcarvalho',
  authorAddress: 'lucio.carvalho@toumoro.com',
  cdkVersion: '2.140.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.2.0',
  name: 'cdk-constructs',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/tm-lcarvalho/cdk-constructs.git',
  description: 'A CDK construct library',
  license: 'GPL-3.0-or-later',
  gitignore: ['.venv', '.env'],
  npmignore: ['examples'],

  deps: ['cdk-nag'], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  npmProvenance: false,
  publishToPypi: {
    distName: 'cdk-constructs',
    module: 'cdk-constructs',
  },
  majorVersion: 1,
  //stability: 'experimental',
});

const workflow = project.github?.tryFindWorkflow('pull-request-lint');
if (workflow) {
  // Modify the types in the existing workflow for action-semantic-pull-request
  workflow.on({
    pullRequestTarget: {
      types: [
        'labeled',
        'opened',
        'synchronize',
        'reopened',
        'ready_for_review',
        'edited',
      ],
    },
  });

  workflow.addJobs({
    validate: {
      name: 'Validate PR title',
      runsOn: ['ubuntu-latest'],
      permissions: {
        pullRequests: JobPermission.WRITE,
      },
      steps: [
        {
          uses: 'amannn/action-semantic-pull-request@v5.4.0',
          env: {
            GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
          },
          with: {
            types: 'build,ci,docs,feat,fix,perf,refactor,style,test',
          },
        },
      ],
    },
  });
}

project.synth();