# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineCdk <a name="PipelineCdk" id="tm-cdk-constructs.PipelineCdk"></a>

A CDK construct that creates a CodePipeline.

#### Initializers <a name="Initializers" id="tm-cdk-constructs.PipelineCdk.Initializer"></a>

```typescript
import { PipelineCdk } from 'tm-cdk-constructs'

new PipelineCdk(scope: Construct, id: string, props: PipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#tm-cdk-constructs.PipelineCdk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#tm-cdk-constructs.PipelineCdk.Initializer.parameter.id">id</a></code> | <code>string</code> | The name of the construct. |
| <code><a href="#tm-cdk-constructs.PipelineCdk.Initializer.parameter.props">props</a></code> | <code><a href="#tm-cdk-constructs.PipelineProps">PipelineProps</a></code> | The properties for the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="tm-cdk-constructs.PipelineCdk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="tm-cdk-constructs.PipelineCdk.Initializer.parameter.id"></a>

- *Type:* string

The name of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="tm-cdk-constructs.PipelineCdk.Initializer.parameter.props"></a>

- *Type:* <a href="#tm-cdk-constructs.PipelineProps">PipelineProps</a>

The properties for the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#tm-cdk-constructs.PipelineCdk.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="tm-cdk-constructs.PipelineCdk.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#tm-cdk-constructs.PipelineCdk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="tm-cdk-constructs.PipelineCdk.isConstruct"></a>

```typescript
import { PipelineCdk } from 'tm-cdk-constructs'

PipelineCdk.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="tm-cdk-constructs.PipelineCdk.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#tm-cdk-constructs.PipelineCdk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#tm-cdk-constructs.PipelineCdk.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.pipelines.CodePipeline</code> | The CodePipeline created by the construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="tm-cdk-constructs.PipelineCdk.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="tm-cdk-constructs.PipelineCdk.property.pipeline"></a>

```typescript
public readonly pipeline: CodePipeline;
```

- *Type:* aws-cdk-lib.pipelines.CodePipeline

The CodePipeline created by the construct.

---


### TmVpcBase <a name="TmVpcBase" id="tm-cdk-constructs.TmVpcBase"></a>

A VPC construct that creates a VPC with public and private subnets.

#### Initializers <a name="Initializers" id="tm-cdk-constructs.TmVpcBase.Initializer"></a>

```typescript
import { TmVpcBase } from 'tm-cdk-constructs'

new TmVpcBase(scope: Construct, id: string, props: TmVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#tm-cdk-constructs.TmVpcBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#tm-cdk-constructs.TmVpcBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#tm-cdk-constructs.TmVpcBase.Initializer.parameter.props">props</a></code> | <code><a href="#tm-cdk-constructs.TmVpcProps">TmVpcProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="tm-cdk-constructs.TmVpcBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="tm-cdk-constructs.TmVpcBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="tm-cdk-constructs.TmVpcBase.Initializer.parameter.props"></a>

- *Type:* <a href="#tm-cdk-constructs.TmVpcProps">TmVpcProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#tm-cdk-constructs.TmVpcBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.addClientVpnEndpoint">addClientVpnEndpoint</a></code> | Adds a new client VPN endpoint to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.addFlowLog">addFlowLog</a></code> | Adds a new flow log to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.addGatewayEndpoint">addGatewayEndpoint</a></code> | Adds a new gateway endpoint to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.addInterfaceEndpoint">addInterfaceEndpoint</a></code> | Adds a new interface endpoint to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.addVpnConnection">addVpnConnection</a></code> | Adds a new VPN connection to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.enableVpnGateway">enableVpnGateway</a></code> | Adds a VPN Gateway to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.selectSubnets">selectSubnets</a></code> | Returns IDs of selected subnets. |

---

##### `toString` <a name="toString" id="tm-cdk-constructs.TmVpcBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="tm-cdk-constructs.TmVpcBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="tm-cdk-constructs.TmVpcBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addClientVpnEndpoint` <a name="addClientVpnEndpoint" id="tm-cdk-constructs.TmVpcBase.addClientVpnEndpoint"></a>

```typescript
public addClientVpnEndpoint(id: string, options: ClientVpnEndpointOptions): ClientVpnEndpoint
```

Adds a new client VPN endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="tm-cdk-constructs.TmVpcBase.addClientVpnEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="tm-cdk-constructs.TmVpcBase.addClientVpnEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.ClientVpnEndpointOptions

---

##### `addFlowLog` <a name="addFlowLog" id="tm-cdk-constructs.TmVpcBase.addFlowLog"></a>

```typescript
public addFlowLog(id: string, options?: FlowLogOptions): FlowLog
```

Adds a new flow log to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="tm-cdk-constructs.TmVpcBase.addFlowLog.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="tm-cdk-constructs.TmVpcBase.addFlowLog.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.FlowLogOptions

---

##### `addGatewayEndpoint` <a name="addGatewayEndpoint" id="tm-cdk-constructs.TmVpcBase.addGatewayEndpoint"></a>

```typescript
public addGatewayEndpoint(id: string, options: GatewayVpcEndpointOptions): GatewayVpcEndpoint
```

Adds a new gateway endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="tm-cdk-constructs.TmVpcBase.addGatewayEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="tm-cdk-constructs.TmVpcBase.addGatewayEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions

---

##### `addInterfaceEndpoint` <a name="addInterfaceEndpoint" id="tm-cdk-constructs.TmVpcBase.addInterfaceEndpoint"></a>

```typescript
public addInterfaceEndpoint(id: string, options: InterfaceVpcEndpointOptions): InterfaceVpcEndpoint
```

Adds a new interface endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="tm-cdk-constructs.TmVpcBase.addInterfaceEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="tm-cdk-constructs.TmVpcBase.addInterfaceEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointOptions

---

##### `addVpnConnection` <a name="addVpnConnection" id="tm-cdk-constructs.TmVpcBase.addVpnConnection"></a>

```typescript
public addVpnConnection(id: string, options: VpnConnectionOptions): VpnConnection
```

Adds a new VPN connection to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="tm-cdk-constructs.TmVpcBase.addVpnConnection.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="tm-cdk-constructs.TmVpcBase.addVpnConnection.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpnConnectionOptions

---

##### `enableVpnGateway` <a name="enableVpnGateway" id="tm-cdk-constructs.TmVpcBase.enableVpnGateway"></a>

```typescript
public enableVpnGateway(options: EnableVpnGatewayOptions): void
```

Adds a VPN Gateway to this VPC.

###### `options`<sup>Required</sup> <a name="options" id="tm-cdk-constructs.TmVpcBase.enableVpnGateway.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.EnableVpnGatewayOptions

---

##### `selectSubnets` <a name="selectSubnets" id="tm-cdk-constructs.TmVpcBase.selectSubnets"></a>

```typescript
public selectSubnets(selection?: SubnetSelection): SelectedSubnets
```

Returns IDs of selected subnets.

###### `selection`<sup>Optional</sup> <a name="selection" id="tm-cdk-constructs.TmVpcBase.selectSubnets.parameter.selection"></a>

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#tm-cdk-constructs.TmVpcBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.fromLookup">fromLookup</a></code> | Import an existing VPC by querying the AWS environment this stack is deployed to. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.fromVpcAttributes">fromVpcAttributes</a></code> | Import a VPC by supplying all attributes directly. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="tm-cdk-constructs.TmVpcBase.isConstruct"></a>

```typescript
import { TmVpcBase } from 'tm-cdk-constructs'

TmVpcBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="tm-cdk-constructs.TmVpcBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="tm-cdk-constructs.TmVpcBase.isOwnedResource"></a>

```typescript
import { TmVpcBase } from 'tm-cdk-constructs'

TmVpcBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="tm-cdk-constructs.TmVpcBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="tm-cdk-constructs.TmVpcBase.isResource"></a>

```typescript
import { TmVpcBase } from 'tm-cdk-constructs'

TmVpcBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="tm-cdk-constructs.TmVpcBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookup` <a name="fromLookup" id="tm-cdk-constructs.TmVpcBase.fromLookup"></a>

```typescript
import { TmVpcBase } from 'tm-cdk-constructs'

TmVpcBase.fromLookup(scope: Construct, id: string, options: VpcLookupOptions)
```

Import an existing VPC by querying the AWS environment this stack is deployed to.

This function only needs to be used to use VPCs not defined in your CDK
application. If you are looking to share a VPC between stacks, you can
pass the `Vpc` object between stacks and use it as normal.

Calling this method will lead to a lookup when the CDK CLI is executed.
You can therefore not use any values that will only be available at
CloudFormation execution time (i.e., Tokens).

The VPC information will be cached in `cdk.context.json` and the same VPC
will be used on future runs. To refresh the lookup, you will have to
evict the value from the cache using the `cdk context` command. See
https://docs.aws.amazon.com/cdk/latest/guide/context.html for more information.

###### `scope`<sup>Required</sup> <a name="scope" id="tm-cdk-constructs.TmVpcBase.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="tm-cdk-constructs.TmVpcBase.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="tm-cdk-constructs.TmVpcBase.fromLookup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpcLookupOptions

---

##### `fromVpcAttributes` <a name="fromVpcAttributes" id="tm-cdk-constructs.TmVpcBase.fromVpcAttributes"></a>

```typescript
import { TmVpcBase } from 'tm-cdk-constructs'

TmVpcBase.fromVpcAttributes(scope: Construct, id: string, attrs: VpcAttributes)
```

Import a VPC by supplying all attributes directly.

NOTE: using `fromVpcAttributes()` with deploy-time parameters (like a `Fn.importValue()` or
`CfnParameter` to represent a list of subnet IDs) sometimes accidentally works. It happens
to work for constructs that need a list of subnets (like `AutoScalingGroup` and `eks.Cluster`)
but it does not work for constructs that need individual subnets (like
`Instance`). See https://github.com/aws/aws-cdk/issues/4118 for more
information.

Prefer to use `Vpc.fromLookup()` instead.

###### `scope`<sup>Required</sup> <a name="scope" id="tm-cdk-constructs.TmVpcBase.fromVpcAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="tm-cdk-constructs.TmVpcBase.fromVpcAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="tm-cdk-constructs.TmVpcBase.fromVpcAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpcAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | AZs for this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.dnsHostnamesEnabled">dnsHostnamesEnabled</a></code> | <code>boolean</code> | Indicates if instances launched in this VPC will have public DNS hostnames. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.dnsSupportEnabled">dnsSupportEnabled</a></code> | <code>boolean</code> | Indicates if DNS support is enabled for this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.internetConnectivityEstablished">internetConnectivityEstablished</a></code> | <code>constructs.IDependable</code> | Dependencies for internet connectivity. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.isolatedSubnets">isolatedSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of isolated subnets in this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.privateSubnets">privateSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of private subnets in this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.publicSubnets">publicSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of public subnets in this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.vpcArn">vpcArn</a></code> | <code>string</code> | Arn of this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.vpcCidrBlock">vpcCidrBlock</a></code> | <code>string</code> | CIDR range for this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.vpcCidrBlockAssociations">vpcCidrBlockAssociations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.vpcDefaultNetworkAcl">vpcDefaultNetworkAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.vpcDefaultSecurityGroup">vpcDefaultSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.vpcId">vpcId</a></code> | <code>string</code> | Identifier for this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.vpcIpv6CidrBlocks">vpcIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.internetGatewayId">internetGatewayId</a></code> | <code>string</code> | Internet Gateway for the VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Returns the id of the VPN Gateway (if enabled). |

---

##### `node`<sup>Required</sup> <a name="node" id="tm-cdk-constructs.TmVpcBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="tm-cdk-constructs.TmVpcBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="tm-cdk-constructs.TmVpcBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="tm-cdk-constructs.TmVpcBase.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

AZs for this VPC.

---

##### `dnsHostnamesEnabled`<sup>Required</sup> <a name="dnsHostnamesEnabled" id="tm-cdk-constructs.TmVpcBase.property.dnsHostnamesEnabled"></a>

```typescript
public readonly dnsHostnamesEnabled: boolean;
```

- *Type:* boolean

Indicates if instances launched in this VPC will have public DNS hostnames.

---

##### `dnsSupportEnabled`<sup>Required</sup> <a name="dnsSupportEnabled" id="tm-cdk-constructs.TmVpcBase.property.dnsSupportEnabled"></a>

```typescript
public readonly dnsSupportEnabled: boolean;
```

- *Type:* boolean

Indicates if DNS support is enabled for this VPC.

---

##### `internetConnectivityEstablished`<sup>Required</sup> <a name="internetConnectivityEstablished" id="tm-cdk-constructs.TmVpcBase.property.internetConnectivityEstablished"></a>

```typescript
public readonly internetConnectivityEstablished: IDependable;
```

- *Type:* constructs.IDependable

Dependencies for internet connectivity.

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="tm-cdk-constructs.TmVpcBase.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of isolated subnets in this VPC.

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="tm-cdk-constructs.TmVpcBase.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of private subnets in this VPC.

---

##### `publicSubnets`<sup>Required</sup> <a name="publicSubnets" id="tm-cdk-constructs.TmVpcBase.property.publicSubnets"></a>

```typescript
public readonly publicSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of public subnets in this VPC.

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="tm-cdk-constructs.TmVpcBase.property.vpcArn"></a>

```typescript
public readonly vpcArn: string;
```

- *Type:* string

Arn of this VPC.

---

##### `vpcCidrBlock`<sup>Required</sup> <a name="vpcCidrBlock" id="tm-cdk-constructs.TmVpcBase.property.vpcCidrBlock"></a>

```typescript
public readonly vpcCidrBlock: string;
```

- *Type:* string

CIDR range for this VPC.

---

##### `vpcCidrBlockAssociations`<sup>Required</sup> <a name="vpcCidrBlockAssociations" id="tm-cdk-constructs.TmVpcBase.property.vpcCidrBlockAssociations"></a>

```typescript
public readonly vpcCidrBlockAssociations: string[];
```

- *Type:* string[]

---

##### `vpcDefaultNetworkAcl`<sup>Required</sup> <a name="vpcDefaultNetworkAcl" id="tm-cdk-constructs.TmVpcBase.property.vpcDefaultNetworkAcl"></a>

```typescript
public readonly vpcDefaultNetworkAcl: string;
```

- *Type:* string

---

##### `vpcDefaultSecurityGroup`<sup>Required</sup> <a name="vpcDefaultSecurityGroup" id="tm-cdk-constructs.TmVpcBase.property.vpcDefaultSecurityGroup"></a>

```typescript
public readonly vpcDefaultSecurityGroup: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="tm-cdk-constructs.TmVpcBase.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Identifier for this VPC.

---

##### `vpcIpv6CidrBlocks`<sup>Required</sup> <a name="vpcIpv6CidrBlocks" id="tm-cdk-constructs.TmVpcBase.property.vpcIpv6CidrBlocks"></a>

```typescript
public readonly vpcIpv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `internetGatewayId`<sup>Optional</sup> <a name="internetGatewayId" id="tm-cdk-constructs.TmVpcBase.property.internetGatewayId"></a>

```typescript
public readonly internetGatewayId: string;
```

- *Type:* string

Internet Gateway for the VPC.

Note that in case the VPC is configured only
with ISOLATED subnets, this attribute will be `undefined`.

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="tm-cdk-constructs.TmVpcBase.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Returns the id of the VPN Gateway (if enabled).

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.DEFAULT_CIDR_RANGE">DEFAULT_CIDR_RANGE</a></code> | <code>string</code> | The default CIDR range used when creating VPCs. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.DEFAULT_SUBNETS">DEFAULT_SUBNETS</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | The default subnet configuration. |
| <code><a href="#tm-cdk-constructs.TmVpcBase.property.DEFAULT_SUBNETS_NO_NAT">DEFAULT_SUBNETS_NO_NAT</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | The default subnet configuration if natGateways specified to be 0. |

---

##### `DEFAULT_CIDR_RANGE`<sup>Required</sup> <a name="DEFAULT_CIDR_RANGE" id="tm-cdk-constructs.TmVpcBase.property.DEFAULT_CIDR_RANGE"></a>

```typescript
public readonly DEFAULT_CIDR_RANGE: string;
```

- *Type:* string

The default CIDR range used when creating VPCs.

This can be overridden using VpcProps when creating a VPCNetwork resource.
e.g. new VpcResource(this, { cidr: '192.168.0.0./16' })

Note this is specific to the IPv4 CIDR.

---

##### `DEFAULT_SUBNETS`<sup>Required</sup> <a name="DEFAULT_SUBNETS" id="tm-cdk-constructs.TmVpcBase.property.DEFAULT_SUBNETS"></a>

```typescript
public readonly DEFAULT_SUBNETS: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]

The default subnet configuration.

1 Public and 1 Private subnet per AZ evenly split

---

##### `DEFAULT_SUBNETS_NO_NAT`<sup>Required</sup> <a name="DEFAULT_SUBNETS_NO_NAT" id="tm-cdk-constructs.TmVpcBase.property.DEFAULT_SUBNETS_NO_NAT"></a>

```typescript
public readonly DEFAULT_SUBNETS_NO_NAT: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]

The default subnet configuration if natGateways specified to be 0.

1 Public and 1 Isolated Subnet per AZ evenly split

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineProps <a name="PipelineProps" id="tm-cdk-constructs.PipelineProps"></a>

#### Initializer <a name="Initializer" id="tm-cdk-constructs.PipelineProps.Initializer"></a>

```typescript
import { PipelineProps } from 'tm-cdk-constructs'

const pipelineProps: PipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#tm-cdk-constructs.PipelineProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The name of the pipeline. |
| <code><a href="#tm-cdk-constructs.PipelineProps.property.repoBranch">repoBranch</a></code> | <code>string</code> | The branch of the repository to use. |
| <code><a href="#tm-cdk-constructs.PipelineProps.property.repoName">repoName</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#tm-cdk-constructs.PipelineProps.property.primaryOutputDirectory">primaryOutputDirectory</a></code> | <code>string</code> | The primary output directory. |
| <code><a href="#tm-cdk-constructs.PipelineProps.property.synthCommand">synthCommand</a></code> | <code>string[]</code> | The command to run in the synth step. |

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="tm-cdk-constructs.PipelineProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The name of the pipeline.

---

##### `repoBranch`<sup>Required</sup> <a name="repoBranch" id="tm-cdk-constructs.PipelineProps.property.repoBranch"></a>

```typescript
public readonly repoBranch: string;
```

- *Type:* string

The branch of the repository to use.

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="tm-cdk-constructs.PipelineProps.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

The name of the repository.

---

##### `primaryOutputDirectory`<sup>Optional</sup> <a name="primaryOutputDirectory" id="tm-cdk-constructs.PipelineProps.property.primaryOutputDirectory"></a>

```typescript
public readonly primaryOutputDirectory: string;
```

- *Type:* string

The primary output directory.

---

##### `synthCommand`<sup>Optional</sup> <a name="synthCommand" id="tm-cdk-constructs.PipelineProps.property.synthCommand"></a>

```typescript
public readonly synthCommand: string[];
```

- *Type:* string[]

The command to run in the synth step.

---

### TmVpcProps <a name="TmVpcProps" id="tm-cdk-constructs.TmVpcProps"></a>

Represents the configuration for a VPC.

#### Initializer <a name="Initializer" id="tm-cdk-constructs.TmVpcProps.Initializer"></a>

```typescript
import { TmVpcProps } from 'tm-cdk-constructs'

const tmVpcProps: TmVpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Availability zones this VPC spans. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.cidr">cidr</a></code> | <code>string</code> | The CIDR range to use for the VPC, e.g. '10.0.0.0/16'. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.createInternetGateway">createInternetGateway</a></code> | <code>boolean</code> | If set to false then disable the creation of the default internet gateway. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.defaultInstanceTenancy">defaultInstanceTenancy</a></code> | <code>aws-cdk-lib.aws_ec2.DefaultInstanceTenancy</code> | The default tenancy of instances launched into the VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean</code> | Indicates whether the instances launched in the VPC get public DNS hostnames. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean</code> | Indicates whether the DNS resolution is supported for the VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.flowLogs">flowLogs</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}</code> | Flow logs to add to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.gatewayEndpoints">gatewayEndpoints</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}</code> | Gateway endpoints to add to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.ipAddresses">ipAddresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpAddresses</code> | The Provider to use to allocate IPv4 Space to your VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.ipProtocol">ipProtocol</a></code> | <code>aws-cdk-lib.aws_ec2.IpProtocol</code> | The protocol of the vpc. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.ipv6Addresses">ipv6Addresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpv6Addresses</code> | The Provider to use to allocate IPv6 Space to your VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | Define the maximum number of AZs to use in this region. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.natGatewayProvider">natGatewayProvider</a></code> | <code>aws-cdk-lib.aws_ec2.NatProvider</code> | What type of NAT provider to use. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.natGateways">natGateways</a></code> | <code>number</code> | The number of NAT Gateways/Instances to create. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.natGatewaySubnets">natGatewaySubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Configures the subnets which will have NAT Gateways/Instances. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.reservedAzs">reservedAzs</a></code> | <code>number</code> | Define the number of AZs to reserve. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.restrictDefaultSecurityGroup">restrictDefaultSecurityGroup</a></code> | <code>boolean</code> | If set to true then the default inbound & outbound rules will be removed from the default security group. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.subnetConfiguration">subnetConfiguration</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | Configure the subnets to build for each AZ. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.vpcName">vpcName</a></code> | <code>string</code> | The VPC name. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.vpnConnections">vpnConnections</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}</code> | VPN connections to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.vpnGateway">vpnGateway</a></code> | <code>boolean</code> | Indicates whether a VPN gateway should be created and attached to this VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.vpnGatewayAsn">vpnGatewayAsn</a></code> | <code>number</code> | The private Autonomous System Number (ASN) for the VPN gateway. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.vpnRoutePropagation">vpnRoutePropagation</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection[]</code> | Where to propagate VPN routes. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.rangeCidr">rangeCidr</a></code> | <code>string</code> | The CIDR block for the VPC. |
| <code><a href="#tm-cdk-constructs.TmVpcProps.property.enableEndpoints">enableEndpoints</a></code> | <code>string[]</code> | Indicates whether to enable the S3 endpoint for the VPC. |

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="tm-cdk-constructs.TmVpcProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]
- *Default:* a subset of AZs of the stack

Availability zones this VPC spans.

Specify this option only if you do not specify `maxAzs`.

---

##### ~~`cidr`~~<sup>Optional</sup> <a name="cidr" id="tm-cdk-constructs.TmVpcProps.property.cidr"></a>

- *Deprecated:* Use ipAddresses instead

```typescript
public readonly cidr: string;
```

- *Type:* string
- *Default:* Vpc.DEFAULT_CIDR_RANGE

The CIDR range to use for the VPC, e.g. '10.0.0.0/16'.

Should be a minimum of /28 and maximum size of /16. The range will be
split across all subnets per Availability Zone.

---

##### `createInternetGateway`<sup>Optional</sup> <a name="createInternetGateway" id="tm-cdk-constructs.TmVpcProps.property.createInternetGateway"></a>

```typescript
public readonly createInternetGateway: boolean;
```

- *Type:* boolean
- *Default:* true

If set to false then disable the creation of the default internet gateway.

---

##### `defaultInstanceTenancy`<sup>Optional</sup> <a name="defaultInstanceTenancy" id="tm-cdk-constructs.TmVpcProps.property.defaultInstanceTenancy"></a>

```typescript
public readonly defaultInstanceTenancy: DefaultInstanceTenancy;
```

- *Type:* aws-cdk-lib.aws_ec2.DefaultInstanceTenancy
- *Default:* DefaultInstanceTenancy.Default (shared) tenancy

The default tenancy of instances launched into the VPC.

By setting this to dedicated tenancy, instances will be launched on
hardware dedicated to a single AWS customer, unless specifically specified
at instance launch time. Please note, not all instance types are usable
with Dedicated tenancy.

---

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="tm-cdk-constructs.TmVpcProps.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the instances launched in the VPC get public DNS hostnames.

If this attribute is true, instances in the VPC get public DNS hostnames,
but only if the enableDnsSupport attribute is also set to true.

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="tm-cdk-constructs.TmVpcProps.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the DNS resolution is supported for the VPC.

If this attribute is false, the Amazon-provided DNS server in the VPC that
resolves public DNS hostnames to IP addresses is not enabled. If this
attribute is true, queries to the Amazon provided DNS server at the
169.254.169.253 IP address, or the reserved IP address at the base of the
VPC IPv4 network range plus two will succeed.

---

##### `flowLogs`<sup>Optional</sup> <a name="flowLogs" id="tm-cdk-constructs.TmVpcProps.property.flowLogs"></a>

```typescript
public readonly flowLogs: {[ key: string ]: FlowLogOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.FlowLogOptions}
- *Default:* No flow logs.

Flow logs to add to this VPC.

---

##### `gatewayEndpoints`<sup>Optional</sup> <a name="gatewayEndpoints" id="tm-cdk-constructs.TmVpcProps.property.gatewayEndpoints"></a>

```typescript
public readonly gatewayEndpoints: {[ key: string ]: GatewayVpcEndpointOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions}
- *Default:* None.

Gateway endpoints to add to this VPC.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="tm-cdk-constructs.TmVpcProps.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: IIpAddresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpAddresses
- *Default:* ec2.IpAddresses.cidr

The Provider to use to allocate IPv4 Space to your VPC.

Options include static allocation or from a pool.

Note this is specific to IPv4 addresses.

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="tm-cdk-constructs.TmVpcProps.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: IpProtocol;
```

- *Type:* aws-cdk-lib.aws_ec2.IpProtocol
- *Default:* IpProtocol.IPV4_ONLY

The protocol of the vpc.

Options are IPv4 only or dual stack.

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="tm-cdk-constructs.TmVpcProps.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: IIpv6Addresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpv6Addresses
- *Default:* Ipv6Addresses.amazonProvided

The Provider to use to allocate IPv6 Space to your VPC.

Options include amazon provided CIDR block.

Note this is specific to IPv6 addresses.

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="tm-cdk-constructs.TmVpcProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number
- *Default:* 3

Define the maximum number of AZs to use in this region.

If the region has more AZs than you want to use (for example, because of
EIP limits), pick a lower number here. The AZs will be sorted and picked
from the start of the list.

If you pick a higher number than the number of AZs in the region, all AZs
in the region will be selected. To use "all AZs" available to your
account, use a high number (such as 99).

Be aware that environment-agnostic stacks will be created with access to
only 2 AZs, so to use more than 2 AZs, be sure to specify the account and
region on your stack.

Specify this option only if you do not specify `availabilityZones`.

---

##### `natGatewayProvider`<sup>Optional</sup> <a name="natGatewayProvider" id="tm-cdk-constructs.TmVpcProps.property.natGatewayProvider"></a>

```typescript
public readonly natGatewayProvider: NatProvider;
```

- *Type:* aws-cdk-lib.aws_ec2.NatProvider
- *Default:* NatProvider.gateway()

What type of NAT provider to use.

Select between NAT gateways or NAT instances. NAT gateways
may not be available in all AWS regions.

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="tm-cdk-constructs.TmVpcProps.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number
- *Default:* One NAT gateway/instance per Availability Zone

The number of NAT Gateways/Instances to create.

The type of NAT gateway or instance will be determined by the
`natGatewayProvider` parameter.

You can set this number lower than the number of Availability Zones in your
VPC in order to save on NAT cost. Be aware you may be charged for
cross-AZ data traffic instead.

---

##### `natGatewaySubnets`<sup>Optional</sup> <a name="natGatewaySubnets" id="tm-cdk-constructs.TmVpcProps.property.natGatewaySubnets"></a>

```typescript
public readonly natGatewaySubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* All public subnets.

Configures the subnets which will have NAT Gateways/Instances.

You can pick a specific group of subnets by specifying the group name;
the picked subnets must be public subnets.

Only necessary if you have more than one public subnet group.

---

##### `reservedAzs`<sup>Optional</sup> <a name="reservedAzs" id="tm-cdk-constructs.TmVpcProps.property.reservedAzs"></a>

```typescript
public readonly reservedAzs: number;
```

- *Type:* number
- *Default:* 0

Define the number of AZs to reserve.

When specified, the IP space is reserved for the azs but no actual
resources are provisioned.

---

##### `restrictDefaultSecurityGroup`<sup>Optional</sup> <a name="restrictDefaultSecurityGroup" id="tm-cdk-constructs.TmVpcProps.property.restrictDefaultSecurityGroup"></a>

```typescript
public readonly restrictDefaultSecurityGroup: boolean;
```

- *Type:* boolean
- *Default:* true if '@aws-cdk/aws-ec2:restrictDefaultSecurityGroup' is enabled, false otherwise

If set to true then the default inbound & outbound rules will be removed from the default security group.

---

##### `subnetConfiguration`<sup>Optional</sup> <a name="subnetConfiguration" id="tm-cdk-constructs.TmVpcProps.property.subnetConfiguration"></a>

```typescript
public readonly subnetConfiguration: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]
- *Default:* The VPC CIDR will be evenly divided between 1 public and 1 private subnet per AZ.

Configure the subnets to build for each AZ.

Each entry in this list configures a Subnet Group; each group will contain a
subnet for each Availability Zone.

For example, if you want 1 public subnet, 1 private subnet, and 1 isolated
subnet in each AZ provide the following:

```ts
new ec2.Vpc(this, 'VPC', {
  subnetConfiguration: [
     {
       cidrMask: 24,
       name: 'ingress',
       subnetType: ec2.SubnetType.PUBLIC,
     },
     {
       cidrMask: 24,
       name: 'application',
       subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
     },
     {
       cidrMask: 28,
       name: 'rds',
       subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
     }
  ]
});
```

---

##### `vpcName`<sup>Optional</sup> <a name="vpcName" id="tm-cdk-constructs.TmVpcProps.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string
- *Default:* this.node.path

The VPC name.

Since the VPC resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag

---

##### `vpnConnections`<sup>Optional</sup> <a name="vpnConnections" id="tm-cdk-constructs.TmVpcProps.property.vpnConnections"></a>

```typescript
public readonly vpnConnections: {[ key: string ]: VpnConnectionOptions};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_ec2.VpnConnectionOptions}
- *Default:* No connections.

VPN connections to this VPC.

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="tm-cdk-constructs.TmVpcProps.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: boolean;
```

- *Type:* boolean
- *Default:* true when vpnGatewayAsn or vpnConnections is specified

Indicates whether a VPN gateway should be created and attached to this VPC.

---

##### `vpnGatewayAsn`<sup>Optional</sup> <a name="vpnGatewayAsn" id="tm-cdk-constructs.TmVpcProps.property.vpnGatewayAsn"></a>

```typescript
public readonly vpnGatewayAsn: number;
```

- *Type:* number
- *Default:* Amazon default ASN.

The private Autonomous System Number (ASN) for the VPN gateway.

---

##### `vpnRoutePropagation`<sup>Optional</sup> <a name="vpnRoutePropagation" id="tm-cdk-constructs.TmVpcProps.property.vpnRoutePropagation"></a>

```typescript
public readonly vpnRoutePropagation: SubnetSelection[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection[]
- *Default:* On the route tables associated with private subnets. If no private subnets exists, isolated subnets are used. If no isolated subnets exists, public subnets are used.

Where to propagate VPN routes.

---

##### `rangeCidr`<sup>Required</sup> <a name="rangeCidr" id="tm-cdk-constructs.TmVpcProps.property.rangeCidr"></a>

```typescript
public readonly rangeCidr: string;
```

- *Type:* string

The CIDR block for the VPC.

---

##### `enableEndpoints`<sup>Optional</sup> <a name="enableEndpoints" id="tm-cdk-constructs.TmVpcProps.property.enableEndpoints"></a>

```typescript
public readonly enableEndpoints: string[];
```

- *Type:* string[]

Indicates whether to enable the S3 endpoint for the VPC.

---



