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

//mockup query function
const queryProjectById = (projectId: string) => {
  return projects.find((project) => project.id === projectId);
};

export default function ProjectView() {
  const { projectId = "" } = useParams();
  const project = queryProjectById(projectId) ?? { id: "", title: "" };
  //   const { nodes, edges } = useBoardStore().loadBoard(projectId);

  const initialNodes: Node[] = [
    { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
    { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
  ];

  const initialEdges: Edge[] = [{ id: "n1-n2", source: "n1", target: "n2" }];
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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
        // nodeTypes={}for later use
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
