import "reactflow/dist/style.css";

import { Box, Button, Grid, Typography } from "@mui/material";
import Layout from "@theme/Layout";
import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "reactflow";

import styles from "./react-flow.module.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Cron scheduled trigger" },
    style: { background: "white" },
    draggable: false,
  },
  {
    id: "2",
    position: { x: 200, y: 0 },
    data: { label: "On-demand trigger" },
    style: { background: "white" },
    draggable: false,
  },
  {
    id: "3",
    position: { x: 100, y: 100 },
    data: { label: "Switchboard Functions" },
    style: { background: "#2546F4", color: "white" },
    draggable: false,
  },
  {
    id: "4",
    position: { x: -200, y: 200 },
    data: { label: "Push based Data Feed" },
    style: { background: "white" },
    draggable: false,
  },
  {
    id: "5",
    position: { x: 0, y: 200 },
    data: { label: "On-demand Data Feed" },
    style: { background: "white" },
    draggable: false,
  },
  {
    id: "6",
    position: { x: 200, y: 200 },
    data: { label: "Verifiable Randomness" },
    style: { background: "white" },
    draggable: false,
  },
  {
    id: "7",
    position: { x: 400, y: 200 },
    data: { label: "Automation and others" },
    style: { background: "white" },
    draggable: false,
  },
  {
    id: "8",
    position: { x: 100, y: 300 },
    data: { label: "Switchboard Network of TEE oracles" },
    style: { background: "#2546F4', color: 'white" },
    draggable: false,
  },
];

const initialEdges = [
  {
    id: "e1-3",
    source: "1",
    target: "3",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "smoothstep",
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    type: "smoothstep",
  },
  {
    id: "e3-6",
    source: "3",
    target: "6",
    type: "smoothstep",
  },
  {
    id: "e3-7",
    source: "3",
    target: "7",
    type: "smoothstep",
  },
  {
    id: "e4-8",
    source: "4",
    target: "8",
    type: "smoothstep",
  },
  {
    id: "e5-8",
    source: "5",
    target: "8",
    type: "smoothstep",
  },
  {
    id: "e6-8",
    source: "6",
    target: "8",
    type: "smoothstep",
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
    type: "smoothstep",
  },
];

function ReactFlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className={styles.reactFlowContent}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout description={"Testing react-flow"}>
      <div className={styles.headerImg}>
        <h1>
          Welcome to <br />
          <span style={{ color: "var(--ifm-color-primary-dark)" }}>
            YY's react-flow
          </span>{" "}
          docs!
        </h1>
      </div>
      {/* CAN ADD YOUR STUFF HERE */}

      {/* <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <ReactFlowComponent />
        </Grid>
      </Grid> */}
      <Box sx={{ paddingLeft: "25px" }}>
        <div>
          <ReactFlowComponent />
        </div>
      </Box>
    </Layout>
  );
}
