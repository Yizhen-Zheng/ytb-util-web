import { type Node, type Edge } from "@xyflow/react";

// Sction item in Sidebar
// TODO: change highlightedNodes to react button elements(Button as Link)(so clicking button jumps to, e,g, projects page)
type SectionItem = {
  id: string;
  title: string;
  defaultOpen: boolean;
};

// Project info in DB
type ProjectMetadata = {
  id: string;
  icon: string | null;
  title: string;
  thumbnail: string;
  description?: string;
  tags: string[];
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
  children: VideoContentMetadata[];
};
// Node info in DB
// All Info for rendering a Video Node(appearance)
type VideoNodeMetadata = {
  id: string;
  projectMetadataId: string;
  videoContentMetadataId: VideoContentMetadata["id"];
  type: "videoNode";
  x: number;
  y: number;
};

type EdgeMetadata = {
  id: string;
  type: "plainEdge";
  projectMetadataId: ProjectMetadata["id"];
  sourceNodeId: VideoNodeMetadata["id"];
  targetNodeId: VideoNodeMetadata["id"];
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
  // NodeHandleMetadata,
};
