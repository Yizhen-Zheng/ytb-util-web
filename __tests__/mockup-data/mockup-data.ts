import type { SectionItem, Project } from "../../src/lib/type";

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
    title: "Network Security",
    thumbnail: "https://placehold.co/240x140",
    href: "#",
    tags: ["Design", "Frontend", "UI"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Database Optimization",
    thumbnail: "https://placehold.co/240x140/eee/333?text=Thumbnail",
    href: "#",
    tags: ["Backend", "SQL"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export { sections, projects };
