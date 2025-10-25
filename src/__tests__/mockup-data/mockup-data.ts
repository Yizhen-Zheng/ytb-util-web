import type { SectionItem, Project, NodeT, EdgeT } from "@/lib/type";

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

const projects: Project[] = [
  {
    id: "1",
    title: "Network Security",
    thumbnail: "https://placehold.co/240x140",
    href: "#",
    tags: ["Design", "Frontend", "UI"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    title: "Database Optimization",
    thumbnail: "https://placehold.co/240x140/eee/333?text=Thumbnail",
    href: "#",
    tags: ["Backend", "SQL"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const boards: Record<string, { nodes: NodeT[]; edges: EdgeT[] }> = {
  "1": {
    nodes: [
      { id: "node1", label: "node1", x: 160, y: 120 },
      { id: "node2", label: "node2", x: 220, y: 320 },
    ],
    edges: [{ id: "edge1", source: "node1", target: "node2" }],
  },
  "2": {
    nodes: [
      { id: "node1", label: "node1", x: 160, y: 120 },
      { id: "node2", label: "node2", x: 220, y: 320 },
    ],
    edges: [{ id: "edge1", source: "node1", target: "node2" }],
  },
};
export { sections, projects, boards };
