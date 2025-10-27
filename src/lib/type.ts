import { type Node, type Edge } from "@xyflow/react";

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
  nodes: Node[];
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
type VideoNodeMetadata = {
  id: string;
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

type EdgeMetadata = {
  id: string;
  type: "plainEdge";
  projectMetadataId: ProjectMetadata["id"];
  source: NodeHandleMetadata["id"];
  target: NodeHandleMetadata["id"];
};

type NodeHandleMetadata = {
  id: string;
  type: "source" | "target";
  position: "Left" | "Right" | "Top" | "Bottom";
  projectMetadataId: ProjectMetadata["id"];
  videoNodeMetadataId: VideoNodeMetadata["id"];
};

// State(currently not using)
type BoardState = {
  boards: Record<ProjectMetadata["id"], ProjectBoard>;
  getBoard: (projectId: ProjectMetadata["id"]) => ProjectBoard | undefined;
  upsertBoard: (projectId: ProjectMetadata["id"], board: ProjectBoard) => void;
  upsertProject: (projectId: ProjectMetadata["id"], patch: Partial<ProjectBoard>) => void;
};

// TODO: custom edge

export type {
  SectionItem,
  ProjectMetadata,
  ProjectBoard,
  BoardState,
  VideoContentMetadata,
  VideoNodeMetadata,
  EdgeMetadata,
  NodeHandleMetadata,
};
