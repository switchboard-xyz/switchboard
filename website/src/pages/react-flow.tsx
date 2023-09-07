import "reactflow/dist/style.css";

import { Box, Button, Grid, Typography } from "@mui/material";
import Layout from "@theme/Layout";
import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";

import styles from "./react-flow.module.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

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
