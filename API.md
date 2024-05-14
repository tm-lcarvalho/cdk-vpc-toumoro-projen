# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineCdk <a name="PipelineCdk" id="cdk-constructs.PipelineCdk"></a>

#### Initializers <a name="Initializers" id="cdk-constructs.PipelineCdk.Initializer"></a>

```typescript
import { PipelineCdk } from 'cdk-constructs'

new PipelineCdk(scope: Construct, id: string, props: PipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.PipelineCdk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs.PipelineCdk.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.PipelineCdk.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-constructs.PipelineProps">PipelineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs.PipelineCdk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs.PipelineCdk.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.PipelineCdk.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.PipelineProps">PipelineProps</a>

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
| <code><a href="#cdk-constructs.PipelineCdk.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.pipelines.CodePipeline</code> | *No description.* |

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

---


### VpcBase <a name="VpcBase" id="cdk-constructs.VpcBase"></a>

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
| <code><a href="#cdk-constructs.VpcBase.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

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
| <code><a href="#cdk-constructs.PipelineProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.PipelineProps.property.repoBranch">repoBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.PipelineProps.property.repoName">repoName</a></code> | <code>string</code> | *No description.* |

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="cdk-constructs.PipelineProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

---

##### `repoBranch`<sup>Required</sup> <a name="repoBranch" id="cdk-constructs.PipelineProps.property.repoBranch"></a>

```typescript
public readonly repoBranch: string;
```

- *Type:* string

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="cdk-constructs.PipelineProps.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IVpcBase <a name="IVpcBase" id="cdk-constructs.IVpcBase"></a>

- *Implemented By:* <a href="#cdk-constructs.IVpcBase">IVpcBase</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.IVpcBase.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.IVpcBase.property.maxAzs">maxAzs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-constructs.IVpcBase.property.natGateways">natGateways</a></code> | <code>number</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="cdk-constructs.IVpcBase.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="cdk-constructs.IVpcBase.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="cdk-constructs.IVpcBase.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number

---

