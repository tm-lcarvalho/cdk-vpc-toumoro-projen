# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcBase <a name="VpcBase" id="cdk-vpc-toumoro-projen.VpcBase"></a>

#### Initializers <a name="Initializers" id="cdk-vpc-toumoro-projen.VpcBase.Initializer"></a>

```typescript
import { VpcBase } from 'cdk-vpc-toumoro-projen'

new VpcBase(scope: Construct, id: string, props: VpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-vpc-toumoro-projen.VpcProps">VpcProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpc-toumoro-projen.VpcBase.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-vpc-toumoro-projen.VpcProps">VpcProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.addClientVpnEndpoint">addClientVpnEndpoint</a></code> | Adds a new client VPN endpoint to this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.addFlowLog">addFlowLog</a></code> | Adds a new flow log to this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.addGatewayEndpoint">addGatewayEndpoint</a></code> | Adds a new gateway endpoint to this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.addInterfaceEndpoint">addInterfaceEndpoint</a></code> | Adds a new interface endpoint to this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.addVpnConnection">addVpnConnection</a></code> | Adds a new VPN connection to this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.enableVpnGateway">enableVpnGateway</a></code> | Adds a VPN Gateway to this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.selectSubnets">selectSubnets</a></code> | Returns IDs of selected subnets. |

---

##### `toString` <a name="toString" id="cdk-vpc-toumoro-projen.VpcBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpc-toumoro-projen.VpcBase.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpc-toumoro-projen.VpcBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addClientVpnEndpoint` <a name="addClientVpnEndpoint" id="cdk-vpc-toumoro-projen.VpcBase.addClientVpnEndpoint"></a>

```typescript
public addClientVpnEndpoint(id: string, options: ClientVpnEndpointOptions): ClientVpnEndpoint
```

Adds a new client VPN endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-toumoro-projen.VpcBase.addClientVpnEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-vpc-toumoro-projen.VpcBase.addClientVpnEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.ClientVpnEndpointOptions

---

##### `addFlowLog` <a name="addFlowLog" id="cdk-vpc-toumoro-projen.VpcBase.addFlowLog"></a>

```typescript
public addFlowLog(id: string, options?: FlowLogOptions): FlowLog
```

Adds a new flow log to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-toumoro-projen.VpcBase.addFlowLog.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-vpc-toumoro-projen.VpcBase.addFlowLog.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.FlowLogOptions

---

##### `addGatewayEndpoint` <a name="addGatewayEndpoint" id="cdk-vpc-toumoro-projen.VpcBase.addGatewayEndpoint"></a>

```typescript
public addGatewayEndpoint(id: string, options: GatewayVpcEndpointOptions): GatewayVpcEndpoint
```

Adds a new gateway endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-toumoro-projen.VpcBase.addGatewayEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-vpc-toumoro-projen.VpcBase.addGatewayEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.GatewayVpcEndpointOptions

---

##### `addInterfaceEndpoint` <a name="addInterfaceEndpoint" id="cdk-vpc-toumoro-projen.VpcBase.addInterfaceEndpoint"></a>

```typescript
public addInterfaceEndpoint(id: string, options: InterfaceVpcEndpointOptions): InterfaceVpcEndpoint
```

Adds a new interface endpoint to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-toumoro-projen.VpcBase.addInterfaceEndpoint.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-vpc-toumoro-projen.VpcBase.addInterfaceEndpoint.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointOptions

---

##### `addVpnConnection` <a name="addVpnConnection" id="cdk-vpc-toumoro-projen.VpcBase.addVpnConnection"></a>

```typescript
public addVpnConnection(id: string, options: VpnConnectionOptions): VpnConnection
```

Adds a new VPN connection to this VPC.

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-toumoro-projen.VpcBase.addVpnConnection.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-vpc-toumoro-projen.VpcBase.addVpnConnection.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpnConnectionOptions

---

##### `enableVpnGateway` <a name="enableVpnGateway" id="cdk-vpc-toumoro-projen.VpcBase.enableVpnGateway"></a>

```typescript
public enableVpnGateway(options: EnableVpnGatewayOptions): void
```

Adds a VPN Gateway to this VPC.

###### `options`<sup>Required</sup> <a name="options" id="cdk-vpc-toumoro-projen.VpcBase.enableVpnGateway.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.EnableVpnGatewayOptions

---

##### `selectSubnets` <a name="selectSubnets" id="cdk-vpc-toumoro-projen.VpcBase.selectSubnets"></a>

```typescript
public selectSubnets(selection?: SubnetSelection): SelectedSubnets
```

Returns IDs of selected subnets.

###### `selection`<sup>Optional</sup> <a name="selection" id="cdk-vpc-toumoro-projen.VpcBase.selectSubnets.parameter.selection"></a>

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.fromLookup">fromLookup</a></code> | Import an existing VPC from by querying the AWS environment this stack is deployed to. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.fromVpcAttributes">fromVpcAttributes</a></code> | Import a VPC by supplying all attributes directly. |

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

##### `isResource` <a name="isResource" id="cdk-vpc-toumoro-projen.VpcBase.isResource"></a>

```typescript
import { VpcBase } from 'cdk-vpc-toumoro-projen'

VpcBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpc-toumoro-projen.VpcBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLookup` <a name="fromLookup" id="cdk-vpc-toumoro-projen.VpcBase.fromLookup"></a>

```typescript
import { VpcBase } from 'cdk-vpc-toumoro-projen'

VpcBase.fromLookup(scope: Construct, id: string, options: VpcLookupOptions)
```

Import an existing VPC from by querying the AWS environment this stack is deployed to.

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

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpc-toumoro-projen.VpcBase.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-toumoro-projen.VpcBase.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-vpc-toumoro-projen.VpcBase.fromLookup.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpcLookupOptions

---

##### `fromVpcAttributes` <a name="fromVpcAttributes" id="cdk-vpc-toumoro-projen.VpcBase.fromVpcAttributes"></a>

```typescript
import { VpcBase } from 'cdk-vpc-toumoro-projen'

VpcBase.fromVpcAttributes(scope: Construct, id: string, attrs: VpcAttributes)
```

Import a VPC by supplying all attributes directly.

NOTE: using `fromVpcAttributes()` with deploy-time parameters (like a `Fn.importValue()` or
`CfnParameter` to represent a list of subnet IDs) sometimes accidentally works. It happens
to work for constructs that need a list of subnets (like `AutoScalingGroup` and `eks.Cluster`)
but it does not work for constructs that need individual subnets (like
`Instance`). See https://github.com/aws/aws-cdk/issues/4118 for more
information.

Prefer to use `Vpc.fromLookup()` instead.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpc-toumoro-projen.VpcBase.fromVpcAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-toumoro-projen.VpcBase.fromVpcAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-vpc-toumoro-projen.VpcBase.fromVpcAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ec2.VpcAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | AZs for this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.dnsHostnamesEnabled">dnsHostnamesEnabled</a></code> | <code>boolean</code> | Indicates if instances launched in this VPC will have public DNS hostnames. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.dnsSupportEnabled">dnsSupportEnabled</a></code> | <code>boolean</code> | Indicates if DNS support is enabled for this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.internetConnectivityEstablished">internetConnectivityEstablished</a></code> | <code>constructs.IDependable</code> | Dependencies for internet connectivity. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.internetGatewayId">internetGatewayId</a></code> | <code>string</code> | Internet Gateway for the VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.isolatedSubnets">isolatedSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of isolated subnets in this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.privateSubnets">privateSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of private subnets in this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.publicSubnets">publicSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | List of public subnets in this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpcArn">vpcArn</a></code> | <code>string</code> | Arn of this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpcCidrBlock">vpcCidrBlock</a></code> | <code>string</code> | CIDR range for this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpcCidrBlockAssociations">vpcCidrBlockAssociations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpcDefaultNetworkAcl">vpcDefaultNetworkAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpcDefaultSecurityGroup">vpcDefaultSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpcId">vpcId</a></code> | <code>string</code> | Identifier for this VPC. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpcIpv6CidrBlocks">vpcIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Returns the id of the VPN Gateway (if enabled). |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpc-toumoro-projen.VpcBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpc-toumoro-projen.VpcBase.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpc-toumoro-projen.VpcBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="cdk-vpc-toumoro-projen.VpcBase.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

AZs for this VPC.

---

##### `dnsHostnamesEnabled`<sup>Required</sup> <a name="dnsHostnamesEnabled" id="cdk-vpc-toumoro-projen.VpcBase.property.dnsHostnamesEnabled"></a>

```typescript
public readonly dnsHostnamesEnabled: boolean;
```

- *Type:* boolean

Indicates if instances launched in this VPC will have public DNS hostnames.

---

##### `dnsSupportEnabled`<sup>Required</sup> <a name="dnsSupportEnabled" id="cdk-vpc-toumoro-projen.VpcBase.property.dnsSupportEnabled"></a>

```typescript
public readonly dnsSupportEnabled: boolean;
```

- *Type:* boolean

Indicates if DNS support is enabled for this VPC.

---

##### `internetConnectivityEstablished`<sup>Required</sup> <a name="internetConnectivityEstablished" id="cdk-vpc-toumoro-projen.VpcBase.property.internetConnectivityEstablished"></a>

```typescript
public readonly internetConnectivityEstablished: IDependable;
```

- *Type:* constructs.IDependable

Dependencies for internet connectivity.

---

##### `internetGatewayId`<sup>Optional</sup> <a name="internetGatewayId" id="cdk-vpc-toumoro-projen.VpcBase.property.internetGatewayId"></a>

```typescript
public readonly internetGatewayId: string;
```

- *Type:* string

Internet Gateway for the VPC.

Note that in case the VPC is configured only
with ISOLATED subnets, this attribute will be `undefined`.

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="cdk-vpc-toumoro-projen.VpcBase.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of isolated subnets in this VPC.

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="cdk-vpc-toumoro-projen.VpcBase.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of private subnets in this VPC.

---

##### `publicSubnets`<sup>Required</sup> <a name="publicSubnets" id="cdk-vpc-toumoro-projen.VpcBase.property.publicSubnets"></a>

```typescript
public readonly publicSubnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

List of public subnets in this VPC.

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="cdk-vpc-toumoro-projen.VpcBase.property.vpcArn"></a>

```typescript
public readonly vpcArn: string;
```

- *Type:* string

Arn of this VPC.

---

##### `vpcCidrBlock`<sup>Required</sup> <a name="vpcCidrBlock" id="cdk-vpc-toumoro-projen.VpcBase.property.vpcCidrBlock"></a>

```typescript
public readonly vpcCidrBlock: string;
```

- *Type:* string

CIDR range for this VPC.

---

##### `vpcCidrBlockAssociations`<sup>Required</sup> <a name="vpcCidrBlockAssociations" id="cdk-vpc-toumoro-projen.VpcBase.property.vpcCidrBlockAssociations"></a>

```typescript
public readonly vpcCidrBlockAssociations: string[];
```

- *Type:* string[]

---

##### `vpcDefaultNetworkAcl`<sup>Required</sup> <a name="vpcDefaultNetworkAcl" id="cdk-vpc-toumoro-projen.VpcBase.property.vpcDefaultNetworkAcl"></a>

```typescript
public readonly vpcDefaultNetworkAcl: string;
```

- *Type:* string

---

##### `vpcDefaultSecurityGroup`<sup>Required</sup> <a name="vpcDefaultSecurityGroup" id="cdk-vpc-toumoro-projen.VpcBase.property.vpcDefaultSecurityGroup"></a>

```typescript
public readonly vpcDefaultSecurityGroup: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="cdk-vpc-toumoro-projen.VpcBase.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Identifier for this VPC.

---

##### `vpcIpv6CidrBlocks`<sup>Required</sup> <a name="vpcIpv6CidrBlocks" id="cdk-vpc-toumoro-projen.VpcBase.property.vpcIpv6CidrBlocks"></a>

```typescript
public readonly vpcIpv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="cdk-vpc-toumoro-projen.VpcBase.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Returns the id of the VPN Gateway (if enabled).

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-vpc-toumoro-projen.VpcBase.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.DEFAULT_CIDR_RANGE">DEFAULT_CIDR_RANGE</a></code> | <code>string</code> | The default CIDR range used when creating VPCs. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.DEFAULT_SUBNETS">DEFAULT_SUBNETS</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | The default subnet configuration. |
| <code><a href="#cdk-vpc-toumoro-projen.VpcBase.property.DEFAULT_SUBNETS_NO_NAT">DEFAULT_SUBNETS_NO_NAT</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetConfiguration[]</code> | The default subnet configuration if natGateways specified to be 0. |

---

##### `DEFAULT_CIDR_RANGE`<sup>Required</sup> <a name="DEFAULT_CIDR_RANGE" id="cdk-vpc-toumoro-projen.VpcBase.property.DEFAULT_CIDR_RANGE"></a>

```typescript
public readonly DEFAULT_CIDR_RANGE: string;
```

- *Type:* string

The default CIDR range used when creating VPCs.

This can be overridden using VpcProps when creating a VPCNetwork resource.
e.g. new VpcResource(this, { cidr: '192.168.0.0./16' })

---

##### `DEFAULT_SUBNETS`<sup>Required</sup> <a name="DEFAULT_SUBNETS" id="cdk-vpc-toumoro-projen.VpcBase.property.DEFAULT_SUBNETS"></a>

```typescript
public readonly DEFAULT_SUBNETS: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]

The default subnet configuration.

1 Public and 1 Private subnet per AZ evenly split

---

##### `DEFAULT_SUBNETS_NO_NAT`<sup>Required</sup> <a name="DEFAULT_SUBNETS_NO_NAT" id="cdk-vpc-toumoro-projen.VpcBase.property.DEFAULT_SUBNETS_NO_NAT"></a>

```typescript
public readonly DEFAULT_SUBNETS_NO_NAT: SubnetConfiguration[];
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetConfiguration[]

The default subnet configuration if natGateways specified to be 0.

1 Public and 1 Isolated Subnet per AZ evenly split

---

## Structs <a name="Structs" id="Structs"></a>

### VpcProps <a name="VpcProps" id="cdk-vpc-toumoro-projen.VpcProps"></a>

#### Initializer <a name="Initializer" id="cdk-vpc-toumoro-projen.VpcProps.Initializer"></a>

```typescript
import { VpcProps } from 'cdk-vpc-toumoro-projen'

const vpcProps: VpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpc-toumoro-projen.VpcProps.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpc-toumoro-projen.VpcProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | *No description.* |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="cdk-vpc-toumoro-projen.VpcProps.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="cdk-vpc-toumoro-projen.VpcProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number

---



