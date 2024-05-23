import * as rds from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';

export interface GlobalClusterProps {
  readonly deletionProtection?: boolean;
  readonly engine: string;
  readonly engineVersion: string;
  readonly globalClusterIdentifier: string;
  readonly sourceDbClusterIdentifier: string;
  readonly storageEncrypted?: boolean;
}

export class RdsGlobal extends Construct {
  /**
     * The CodePipeline created by the construct.
     */
  //public readonly rdsGlobal: rds.CfnGlobalCluster;
  /**
     * Constructs a new instance of the PipelineCdk class.
     * @param scope The parent construct.
     * @param id The name of the construct.
     * @param props The properties for the construct.
     * @default - No default properties.
     *  */
  constructor(scope: Construct, id: string, props: GlobalClusterProps) {
    super(scope, id);

    new rds.CfnGlobalCluster(this, 'MyCfnGlobalCluster', /* all optional props */ {
      deletionProtection: props.deletionProtection,
      engine: props.engine,
      engineVersion: props.engineVersion,
      globalClusterIdentifier: props.globalClusterIdentifier,
      sourceDbClusterIdentifier: props.sourceDbClusterIdentifier,
      storageEncrypted: props.storageEncrypted,
    });
  }
}


