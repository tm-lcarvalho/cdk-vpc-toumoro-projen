import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'tm-lcarvalho',
  authorAddress: 'lucio.carvalho@toumoro.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-vpn-toumoro-projen',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/tm-lcarvalho/cdk-vpc-toumoro-projen.git',
  description: 'A CDK construct library to create a VPC with VPN',
  license: 'Apache-2.0',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  publishToPypi: {
    distName: 'cdk-vpc-toumoro-projen',
    module: 'cdk-vpc-toumoro-projen',
  },
});


project.synth();