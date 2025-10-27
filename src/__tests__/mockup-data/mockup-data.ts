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
    items: [
      { icon: "📚", name: "Coding Library" },
      { icon: "🔢", name: "Algorithms Library" },
      { icon: "📖", name: "Books" },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    defaultOpen: true,
    items: [
      { icon: "💾", name: "Data Structure" },
      { icon: "📓", name: "Prarallel computing" },
      { icon: "✅", name: "Boilogy" },
      { icon: "💼", name: "Hardware" },
    ],
  },
];

const projects: ProjectMetadata[] = [
  {
    id: "project_1",
    title: "NeuralNetwork",
    thumbnail: "https://placehold.co/240x140",
    tags: ["Deep Learning", "AI", "Machine Learning"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "project_2",
    title: "Web Development",
    thumbnail: "https://placehold.co/240x140/eee/333?text=Thumbnail",
    tags: ["Design", "Frontend", "UI"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  },
  {
    id: "vid_2",
    projectMetadataId: "project_1",
    video_url: "https://www.youtube.com/watch?v=7eh4d6sabA0",
    timestamps: ["00:00 Intro", "01:30 Setting up Python", "05:00 Training Model"],
    thumbnail: "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg",
    title: "Machine Learning for Beginners - Full Course",
    description: "FreeCodeCamp crash course to start learning ML in Python.",
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
  },
  {
    id: "vid_4",
    projectMetadataId: "project_2",
    video_url: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    timestamps: ["00:00 Setup", "03:20 JSX", "10:45 Hooks"],
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    title: "React JS Crash Course",
    description: "Traversy Media crash course for React beginners.",
  },
  {
    id: "vid_5",
    projectMetadataId: "project_2",
    video_url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    timestamps: ["00:00 Intro", "03:00 Variables", "12:15 Functions"],
    thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg",
    title: "Learn Python in One Video",
    description: "Quick overview of Python basics for complete beginners.",
  },
];

const videoNodeMetadatas: VideoNodeMetadata[] = [
  // project_1
  {
    projectMetadataId: "project_1",
    videoContentMetadataId: "vid_1",
    type: "videoNode",
    color: "#FF9F43",
    x: 100,
    y: 100,
    width: 250,
    height: 140,
  },
  {
    projectMetadataId: "project_1",
    videoContentMetadataId: "vid_2",
    type: "videoNode",
    color: "#54A0FF",
    x: 400,
    y: 180,
    width: 250,
    height: 140,
  },

  // project_2

  {
    projectMetadataId: "project_2",
    videoContentMetadataId: "vid_3",
    type: "videoNode",
    color: "#10AC84",
    x: 120,
    y: 400,
    width: 250,
    height: 140,
  },
  {
    projectMetadataId: "project_2",
    videoContentMetadataId: "vid_4",
    type: "videoNode",
    color: "#F368E0",
    x: 420,
    y: 460,
    width: 250,
    height: 140,
  },
  {
    projectMetadataId: "project_2",
    videoContentMetadataId: "vid_5",
    type: "videoNode",
    color: "#5F27CD",
    x: 700,
    y: 120,
    width: 250,
    height: 140,
  },
];

const edgeMetadatas: EdgeMetadata[] = [
  // project_1
  { id: "project_1_edge1", projectMetadataId: "project_1", source: "vid_1", target: "vid_2", type: "plainEdge" },
  // project_2
  { id: "project_2_edge1", projectMetadataId: "project_2", source: "vid_3", target: "vid_4", type: "plainEdge" },
  { id: "project_2_edge2", projectMetadataId: "project_2", source: "vid_3", target: "vid_5", type: "plainEdge" },
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
