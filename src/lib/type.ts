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
// Project info
type Project = {
  id: string;
  title: string;
  thumbnail: string;
  href: string;
  description?: string;
  tags?: string[];
};

// Project Graph
type NodeT = { id: string; label: string; x: number; y: number };
type EdgeT = { id: string; source: string; target: string };

type BoardState = {
  board: Record<string, { nodes: NodeT[]; edges: EdgeT[] }>;
  loadBoard: (projectId: string) => { nodes: NodeT[]; edges: EdgeT[] };
  upsertBoard: (projectId: string, nodes: NodeT[], edges: EdgeT[]) => void;
};

export type { SectionItem, Project, NodeT, EdgeT, BoardState };
