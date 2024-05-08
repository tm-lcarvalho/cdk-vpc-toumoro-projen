import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'tm-lcarvalho',
  authorAddress: 'lucio.carvalho@toumoro.com',
  cdkVersion: '2.140.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.2.0',
  name: 'cdk-vpc-toumoro-projen',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/tm-lcarvalho/cdk-vpc-toumoro-projen.git',
  description: 'A CDK construct library to create a VPC with public and private subnets.',
  license: 'GPL-3.0-or-later',
  gitignore: ['.venv', '.env'],
  npmignore: ['examples'],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  npmProvenance: false,
  publishToPypi: {
    distName: 'cdk-vpc-toumoro-projen',
    module: 'cdk-vpc-toumoro-projen',
  },
  majorVersion: 1,
  //stability: 'experimental',
});

project.synth();