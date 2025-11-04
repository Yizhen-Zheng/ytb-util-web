import type {
  SectionItem,
  ProjectBoard,
  ProjectMetadata,
  VideoContentMetadata,
  VideoNodeMetadata,
  EdgeMetadata,
} from "@/lib/type";
import type { Node, Edge, XYPosition, NodeProps } from "@xyflow/react";

const sections: SectionItem[] = [
  {
    id: "favorites",
    title: "Favorites",
    defaultOpen: true,
  },
  {
    id: "projects",
    title: "Projects",
    defaultOpen: true,
  },
];

const projects: ProjectMetadata[] = [
  {
    id: "project_1",
    icon: "🎨",
    title: "Figma Advanced Tutorial II - Prototyping with Design Systems",
    thumbnail: "https://placehold.co/240x140",
    tags: ["Design", "UI", "Graphic"],
    description: "How to prototype with Figma effectively with design systems.",
  },
  {
    id: "project_2",
    icon: "✍️",
    title: "Creative Thinking for Designers",
    thumbnail: "https://placehold.co/240x140/eee/333?text=Thumbnail",
    tags: ["Design", "Research"],
    description: "Learn how to solve problems with creative thinking.",
  },
];
const videoContentMetadatas: VideoContentMetadata[] = [
  // project_1

  {
    id: "vid_1",
    projectMetadataId: "project_1",
    video_url: "https://www.youtube.com/watch?v=aircAruvnKk",
    timestamps: ["00:00 Intro", "02:45 What is a Neural Network?", "07:20 Backpropagation"],
    thumbnail: "https://img.youtube.com/vi/aircAruvnKk/hqdefault.jpg",
    title: "Neural Networks Demystified - Part 1",
    description: "A visual introduction to neural networks and how they learn.",
    children: [],
  },
  {
    id: "vid_2",
    projectMetadataId: "project_1",
    video_url: "https://www.youtube.com/watch?v=7eh4d6sabA0",
    timestamps: ["00:00 Intro", "01:30 Setting up Python", "05:00 Training Model"],
    thumbnail: "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg",
    title: "Machine Learning for Beginners - Full Course",
    description: "FreeCodeCamp crash course to start learning ML in Python.",
    children: [],
  },

  // project_2

  {
    id: "vid_3",
    projectMetadataId: "project_2",
    video_url: "https://www.youtube.com/watch?v=LHBE6Q9XlzI",
    timestamps: ["00:00 Why Learn React?", "04:15 Components", "11:00 Props & State"],
    thumbnail: "https://img.youtube.com/vi/LHBE6Q9XlzI/hqdefault.jpg",
    title: "React Explained in 100 Seconds",
    description: "A concise visual explanation of React fundamentals.",
    children: [],
  },
  {
    id: "vid_4",
    projectMetadataId: "project_2",
    video_url: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    timestamps: ["00:00 Setup", "03:20 JSX", "10:45 Hooks"],
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    title: "React JS Crash Course",
    description: "Traversy Media crash course for React beginners.",
    children: [],
  },
  {
    id: "vid_5",
    projectMetadataId: "project_2",
    video_url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    timestamps: ["00:00 Intro", "03:00 Variables", "12:15 Functions"],
    thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg",
    title: "Learn Python in One Video",
    description: "Quick overview of Python basics for complete beginners.",
    children: [],
  },
];

const videoNodeMetadatas: VideoNodeMetadata[] = [
  // project_1
  {
    id: "node1",
    projectMetadataId: "project_1",
    videoContentMetadataId: "vid_1",
    type: "videoNode",
    x: 100,
    y: 100,
  },

  {
    id: "node2",
    projectMetadataId: "project_1",
    videoContentMetadataId: "vid_2",
    type: "videoNode",
    x: 400,
    y: 180,
  },

  // project_2

  {
    id: "node3",
    projectMetadataId: "project_2",
    videoContentMetadataId: "vid_3",
    type: "videoNode",
    x: 120,
    y: 400,
  },
  {
    id: "node4",
    projectMetadataId: "project_2",
    videoContentMetadataId: "vid_4",
    type: "videoNode",
    x: 420,
    y: 460,
  },
  {
    id: "node5",
    projectMetadataId: "project_2",
    videoContentMetadataId: "vid_5",
    type: "videoNode",
    x: 700,
    y: 120,
  },
];

const edgeMetadatas: EdgeMetadata[] = [
  // project_1
  { id: "edge1", projectMetadataId: "project_1", sourceNodeId: "node1", targetNodeId: "node2", type: "plainEdge" },
  // project_2
  { id: "edge2", projectMetadataId: "project_2", sourceNodeId: "node2", targetNodeId: "vid_4", type: "plainEdge" },
  { id: "edge3", projectMetadataId: "project_2", sourceNodeId: "node3", targetNodeId: "vid_5", type: "plainEdge" },
];

const boards: Record<ProjectMetadata["id"], ProjectBoard> = {
  project_1: {
    nodes: [],
    edges: [{ id: "edge1", source: "node1", target: "node2" }],
  },
  project_2: {
    nodes: [
      { id: "node1", position: { x: 160, y: 120 } as XYPosition, data: { label: "node1" } },
      { id: "node2", position: { x: 220, y: 320 } as XYPosition, data: { label: "node2" } },
    ],
    edges: [{ id: "edge1", source: "node1", target: "node2" }],
  },
};
export { sections, projects, boards, videoNodeMetadatas, videoContentMetadatas, edgeMetadatas };

// import type { RoadItem } from "./type-roadmap";
// import type { TimestampItem } from "@/lib/type";
// // layout constants
// const X_OFFSET = 64;
// const Y_OFFSET = 108;

// // --------------- mockup data ----------------

// const roadmap: RoadItem[] = [
//   {
//     id: "root",
//     title: "Intro to Figma & UI Design",
//     done: false,
//     collapsed: false,
//     childrenId: ["a", "b", "c"],
//     depth: 0,
//   },
//   {
//     id: "a",
//     title: "Getting Started with Figma",
//     done: true,
//     collapsed: false,
//     childrenId: ["a1", "a2"],
//     depth: 1,
//   },
//   { id: "a1", title: "Figma Interface Basics", done: true, collapsed: true, childrenId: [], depth: 2 },
//   { id: "a2", title: "Frames, Layers, and Groups", done: true, collapsed: true, childrenId: [], depth: 2 },
//   {
//     id: "b",
//     title: "Core UI Design Skills",
//     done: false,
//     collapsed: false,
//     childrenId: ["b1", "b2", "b3"],
//     depth: 1,
//   },
//   { id: "b1", title: "Typography & Color Systems", done: true, collapsed: true, childrenId: [], depth: 2 },
//   { id: "b2", title: "Auto Layout & Constraints", done: true, collapsed: true, childrenId: [], depth: 2 },
//   { id: "b3", title: "Components & Variants", done: true, collapsed: true, childrenId: [], depth: 2 },
//   {
//     id: "c",
//     title: "Prototyping & Collaboration",
//     done: false,
//     collapsed: false,
//     childrenId: ["c1", "c2"],
//     depth: 1,
//   },
//   { id: "c1", title: "Interactive Prototypes", done: false, collapsed: true, childrenId: [], depth: 2 },
//   { id: "c2", title: "Design Systems & Handoff", done: false, collapsed: true, childrenId: [], depth: 2 },
// ];

// const mockTimestamps: TimestampItem[] = [
//   {
//     id: "t1",
//     title: "Data Warehousing: An Enduring Concept for Analytical Insights",
//     time: "0:39",
//   },
//   {
//     id: "t2",
//     title: "Power BI Developers: The Bridge Between Business and Technology",
//     time: "1:10",
//   },
//   {
//     id: "t3",
//     title: "Inmon's Centralized Enterprise Data Warehouse Approach",
//     time: "1:13",
//   },
// ];
// export { roadmap, X_OFFSET, Y_OFFSET, mockTimestamps };
