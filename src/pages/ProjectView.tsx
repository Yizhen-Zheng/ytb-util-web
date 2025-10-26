import { Outlet, useParams, useLocation, Link } from "react-router";
import { useBoardStore } from "@/hooks/use-board-store";
import React, { useCallback, useRef, useState, useEffect } from "react";
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
import { nodeTypes, edgeTypes } from "@/lib/consts";
import { getProjectById } from "@/lib/db/project";
import { getVideoNodeMetadatasByProjectId } from "@/lib/db/node";
import { videoNodeMetadataToVideoNode } from "@/lib/parse/node";
import { getEdgeMetadatasByProjectId } from "@/lib/db/edge";
import { edgeMetadataToEdge } from "@/lib/parse/edge";
import type { ProjectMetadata, VideoNodeMetadata } from "@/lib/type";

export default function ProjectView() {
  const [loading, setLoading] = useState(true);
  const { projectId } = useParams(); //find current project
  const [project, setProject] = useState<ProjectMetadata>();
  const [error, setError] = useState<string | null>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );
  // 4. Fetch data inside useEffect
  useEffect(() => {
    // Ensure we have a valid projectId
    if (!projectId) {
      setLoading(false);
      setError("No project ID provided");
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch all data in parallel
        const projectDataPromise = getProjectById(projectId);
        const nodeMetadatasPromise = getVideoNodeMetadatasByProjectId(projectId);
        const edgeMetadatasPromise = getEdgeMetadatasByProjectId(projectId);
        const [projectData, nodeMetadatas, edgeMetadatas] = await Promise.all([
          projectDataPromise,
          nodeMetadatasPromise,
          edgeMetadatasPromise,
        ]);

        if (!projectData) {
          throw new Error("Project not found");
        }
        // Process data
        const fetchedNodes = nodeMetadatas.map(videoNodeMetadataToVideoNode);
        const fetchedEdges = edgeMetadatas.map(edgeMetadataToEdge);
        // Set all data state
        setProject(projectData);
        setNodes(fetchedNodes);
        setEdges(fetchedEdges);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [projectId, setNodes, setEdges]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !project) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="relative h-full w-full">
      <h1>Project: {project.title}</h1>
      {/* <Outlet /> is the popup node modal(NodeInfoModal.tsx) */}
      <Outlet />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
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
