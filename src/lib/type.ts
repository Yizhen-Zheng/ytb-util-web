import { type Node, type Edge, type NodeProps } from "@xyflow/react";

// Sction item in Sidebar
type SectionItem = {
  id: string;
  title: string;
  defaultOpen: boolean;
  items: Array<{
    icon: string;
    name: string;
  }>;
};

// Project info in DB
type ProjectMetadata = {
  id: string;
  title: string;
  thumbnail: string;
  description?: string;
  tags?: string[];
};
// A project contains RF nodes and edges
type ProjectBoard = {
  nodes: VideoNodeT[];
  edges: Edge[];
};

// Node info in DB
// for fetching meaningful contents
type VideoContentMetadata = {
  id: string;
  projectMetadataId: ProjectMetadata["id"];
  video_url: string;
  timestamps: string[];
  thumbnail: string;
  title: string;
  description?: string;
};
// Node info in DB
// All Info for rendering a Video Node(appearance)
type GraphNodeRow = {
  projectMetadataId: string;
  videoContentMetadataId: VideoContentMetadata["id"];
  type: "videoNode";
  color?: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  zIndex?: number;
  locked?: boolean;
};
// Video Node info for constructing a custom Node of VideoNodeT in reactflow
type VideoNodeData = {
  videoContentMetadataId: VideoContentMetadata["id"];
};
// Custom Node type
type VideoNodeT = Node<VideoNodeData, "videoNode">;

// State
type BoardState = {
  boards: Record<ProjectMetadata["id"], ProjectBoard>;
  loadBoard: (projectId: string) => { nodes: VideoNodeT[]; edges: Edge[] };
  upsertBoard: (projectId: string, nodes: VideoNodeT[], edges: Edge[]) => void;
};

// TODO: custom edge

export type {
  SectionItem,
  ProjectMetadata,
  ProjectBoard,
  BoardState,
  VideoNodeT,
  VideoNodeData,
  VideoContentMetadata,
  GraphNodeRow,
};
