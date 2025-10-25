import { projects } from "@/__tests__/mockup-data/mockup-data";
import { Outlet, useParams, useLocation, Link } from "react-router";
import { useBoardStore } from "@/hooks/use-board-store";
import React, { useCallback, useRef, useState } from "react";
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import type { NodeChange, EdgeChange, Connection, Node, Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { nodeTypes } from "@/lib/consts";
import { getProjectById } from "@/lib/db/project";
import { getGraphNodeRowsByProjectId } from "@/lib/db/node";
import { dbRowToVideoNode } from "@/lib/parse/node";
import type { ProjectMetadata, GraphNodeRow } from "@/lib/type";

export default async function ProjectView() {
  const { projectId = "" } = useParams();
  const project: ProjectMetadata | undefined = await getProjectById(projectId);
  if (!project) {
    return <div>Project not found</div>;
  }
  const nodeRows: GraphNodeRow[] = await getGraphNodeRowsByProjectId(projectId);
  const initialNodes: Node[] = nodeRows.map((nodeRow) => dbRowToVideoNode(nodeRow));
  // const { nodes, edges } = useBoardStore().loadBoard(projectId);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );
  return (
    <div className="relative h-full w-full">
      <h1>Project: {project.title}</h1>
      {/* <Outlet /> is the popup node modal(NodeInfoModal.tsx) */}
      <Outlet />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}
