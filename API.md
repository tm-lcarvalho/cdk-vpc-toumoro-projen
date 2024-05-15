# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineCdk <a name="PipelineCdk" id="cdk-constructs.PipelineCdk"></a>

A CDK construct that creates a CodePipeline.

#### Initializers <a name="Initializers" id="cdk-constructs.PipelineCdk.Initializer"></a>

```typescript
import { PipelineCdk } from 'cdk-constructs'

new PipelineCdk(scope: Construct, id: string, props: PipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.PipelineCdk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#cdk-constructs.PipelineCdk.Initializer.parameter.id">id</a></code> | <code>string</code> | The name of the construct. |
| <code><a href="#cdk-constructs.PipelineCdk.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-constructs.PipelineProps">PipelineProps</a></code> | The properties for the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs.PipelineCdk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs.PipelineCdk.Initializer.parameter.id"></a>

- *Type:* string

The name of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.PipelineCdk.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.PipelineProps">PipelineProps</a>

The properties for the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs.PipelineCdk.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-constructs.PipelineCdk.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs.PipelineCdk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-constructs.PipelineCdk.isConstruct"></a>

```typescript
import { PipelineCdk } from 'cdk-constructs'

PipelineCdk.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs.PipelineCdk.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.PipelineCdk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs.PipelineCdk.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.pipelines.CodePipeline</code> | The CodePipeline created by the construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs.PipelineCdk.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="cdk-constructs.PipelineCdk.property.pipeline"></a>

```typescript
public readonly pipeline: CodePipeline;
```

- *Type:* aws-cdk-lib.pipelines.CodePipeline

The CodePipeline created by the construct.

---


### VpcBase <a name="VpcBase" id="cdk-constructs.VpcBase"></a>

A VPC construct that creates a VPC with public and private subnets.

#### Initializers <a name="Initializers" id="cdk-constructs.VpcBase.Initializer"></a>

```typescript
import { VpcBase } from 'cdk-constructs'

new VpcBase(scope: Construct, id: string, props: IVpcBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.VpcBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs.VpcBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.VpcBase.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-constructs.IVpcBase">IVpcBase</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs.VpcBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs.VpcBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.VpcBase.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.IVpcBase">IVpcBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs.VpcBase.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-constructs.VpcBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs.VpcBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-constructs.VpcBase.isConstruct"></a>

```typescript
import { VpcBase } from 'cdk-constructs'

VpcBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-constructs.VpcBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.VpcBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-constructs.VpcBase.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | The VPC created by the construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-constructs.VpcBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-constructs.VpcBase.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

The VPC created by the construct.

---


## Structs <a name="Structs" id="Structs"></a>

### PipelineProps <a name="PipelineProps" id="cdk-constructs.PipelineProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.PipelineProps.Initializer"></a>

```typescript
import { PipelineProps } from 'cdk-constructs'

const pipelineProps: PipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.PipelineProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The name of the pipeline. |
| <code><a href="#cdk-constructs.PipelineProps.property.repoBranch">repoBranch</a></code> | <code>string</code> | The branch of the repository to use. |
| <code><a href="#cdk-constructs.PipelineProps.property.repoName">repoName</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#cdk-constructs.PipelineProps.property.primaryOutputDirectory">primaryOutputDirectory</a></code> | <code>string</code> | The primary output directory. |
| <code><a href="#cdk-constructs.PipelineProps.property.synthCommand">synthCommand</a></code> | <code>string[]</code> | The command to run in the synth step. |

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="cdk-constructs.PipelineProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The name of the pipeline.

---

##### `repoBranch`<sup>Required</sup> <a name="repoBranch" id="cdk-constructs.PipelineProps.property.repoBranch"></a>

```typescript
public readonly repoBranch: string;
```

- *Type:* string

The branch of the repository to use.

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="cdk-constructs.PipelineProps.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

The name of the repository.

---

##### `primaryOutputDirectory`<sup>Optional</sup> <a name="primaryOutputDirectory" id="cdk-constructs.PipelineProps.property.primaryOutputDirectory"></a>

```typescript
public readonly primaryOutputDirectory: string;
```

- *Type:* string

The primary output directory.

---

##### `synthCommand`<sup>Optional</sup> <a name="synthCommand" id="cdk-constructs.PipelineProps.property.synthCommand"></a>

```typescript
public readonly synthCommand: string[];
```

- *Type:* string[]

The command to run in the synth step.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IVpcBase <a name="IVpcBase" id="cdk-constructs.IVpcBase"></a>

- *Implemented By:* <a href="#cdk-constructs.IVpcBase">IVpcBase</a>

Represents the configuration for a VPC.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.IVpcBase.property.cidr">cidr</a></code> | <code>string</code> | The CIDR block for the VPC. |
| <code><a href="#cdk-constructs.IVpcBase.property.enableEndpoints">enableEndpoints</a></code> | <code>string[]</code> | Indicates whether to enable the S3 endpoint for the VPC. |
| <code><a href="#cdk-constructs.IVpcBase.property.maxAzs">maxAzs</a></code> | <code>number</code> | The maximum number of availability zones to use for the VPC. |
| <code><a href="#cdk-constructs.IVpcBase.property.natGateways">natGateways</a></code> | <code>number</code> | The number of NAT gateways to create for the VPC. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="cdk-constructs.IVpcBase.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The CIDR block for the VPC.

---

##### `enableEndpoints`<sup>Optional</sup> <a name="enableEndpoints" id="cdk-constructs.IVpcBase.property.enableEndpoints"></a>

```typescript
public readonly enableEndpoints: string[];
```

- *Type:* string[]

Indicates whether to enable the S3 endpoint for the VPC.

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="cdk-constructs.IVpcBase.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number

The maximum number of availability zones to use for the VPC.

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="cdk-constructs.IVpcBase.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number

The number of NAT gateways to create for the VPC.

---

