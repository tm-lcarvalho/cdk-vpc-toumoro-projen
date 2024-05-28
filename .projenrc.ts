import { awscdk } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'tm-lcarvalho',
  authorAddress: 'lucio.carvalho@toumoro.com',
  cdkVersion: '2.143.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.2.0',
  name: 'tm-cdk-constructs',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/tm-lcarvalho/cdk-constructs.git',
  description: 'A CDK construct library',
  license: 'GPL-3.0-or-later',
  gitignore: ['.venv', '.env'],
  npmignore: ['examples'],
  devDeps: [
    'cdk-nag',
    'cdk',
  ],

  npmProvenance: false,
  publishToPypi: {
    distName: 'tm-cdk-constructs',
    module: 'tm-cdk-constructs',
  },
  majorVersion: 1,
  stability: 'experimental',
});

project.synth();