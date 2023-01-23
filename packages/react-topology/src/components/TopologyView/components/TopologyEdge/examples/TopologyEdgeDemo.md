---
id: Topology view
section: extensions
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

## Basic Usage

To use React Topology out-of-the-box, you will first need to transform your back-end data into a [Model](https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/types.ts#L16-L20). These model objects contain the information needed to display the nodes and edges. Each node and edge has a set of properties used by PF Topology as well as a data field which can be used to customize the nodes and edges by the application.

import {
ColaLayout,
CREATE_CONNECTOR_DROP_TYPE,
DefaultEdge,
DefaultGroup,
DefaultNode,
EdgeAnimationSpeed,
EdgeStyle,
EdgeTerminalType,
GraphComponent,
LabelPosition,
ModelKind,
NodeShape,
NodeStatus,
nodeDragSourceSpec,
nodeDropTargetSpec,
SELECTION_EVENT,
Visualization,
VisualizationProvider,
VisualizationSurface,
withDndDrop,
withDragNode,
withSelection,
withPanZoom
} from '@patternfly/react-topology';

import './topology-example.css';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

### Custom Edges

Edges can be styled using properties on `EdgeModel`:
- edgeStyle: choose from the `EdgeStyle` enumeration providing solid, dashed, or dotted
- animationSpeed: choose from the `EdgeAnimationSpeed` enumeration providing various speeds

You can also customize your edges further by providing a custom Edge component. In the component you can specify a variety of parameters to pass to `DefaultEdge` or you can create the SVG elements to depict the edge.

```ts file='./TopologyEdgeDemo.tsx'
```
