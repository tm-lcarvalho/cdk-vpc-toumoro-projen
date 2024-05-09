# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcBase <a name="VpcBase" id="cdk-vpc-toumoro-projen.VpcBase"></a>

#### Initializers <a name="Initializers" id="cdk-vpc-toumoro-projen.VpcBase.Initializer"></a>

```typescript
import { VpcBase } from 'cdk-vpc-toumoro-projen'

new VpcBase(scope: Construct, id: string, props: IVpcBase)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpc-toumoro-projen.IVpcBase">IVpcBase</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpc-toumoro-projen.IVpcBase">IVpcBase</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-vpc-toumoro-projen.VpcBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-vpc-toumoro-projen.VpcBase.isConstruct"></a>

```typescript
import { VpcBase } from 'cdk-vpc-toumoro-projen'

VpcBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpc-toumoro-projen.VpcBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpc-toumoro-projen.VpcBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpc-toumoro-projen.VpcBase.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IVpcBase <a name="IVpcBase" id="cdk-vpc-toumoro-projen.IVpcBase"></a>

- *Implemented By:* <a href="#cdk-vpc-toumoro-projen.IVpcBase">IVpcBase</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.IVpcBase.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.IVpcBase.property.maxAzs">maxAzs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.IVpcBase.property.natGateways">natGateways</a></code> | <code>number</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="cdk-vpc-toumoro-projen.IVpcBase.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="cdk-vpc-toumoro-projen.IVpcBase.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="cdk-vpc-toumoro-projen.IVpcBase.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number

---

