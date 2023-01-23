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

### Pan/Zoom

To allow the user to pan and zoom on the graph, you can use the `withPanZoom` utility when returning the graph component in the componentFactory: `withPanZoom(GraphComponent)`

The component should accept a `panZoomRef` property. This should be the ref on the surface element for the group, the element that will accept the drag or mouse wheel events.

Alternatively, you can use the `usePanZoom` hook within the component to retrieve the `panZoomRef` property.

If you are using the provided `GraphComponent`, this property is accepted and will be handled appropriately.

```ts file='./TopologyPanZoomDemo.tsx'
```
