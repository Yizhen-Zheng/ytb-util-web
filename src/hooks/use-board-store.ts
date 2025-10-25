import { create } from "zustand";
import type { BoardState, NodeT, EdgeT } from "@/lib/type";
import { boards } from "@/__tests__/mockup-data/mockup-data";

const useBoardStore = create<BoardState>((set, get) => ({
  boardTable: boards,
  loadBoard: (projectId: string) => {
    const board = get().boardTable[projectId] ?? { nodes: [], edges: [] };
    return board;
  },
  upsertBoard: (projectId: string, nodes: NodeT[], edges: EdgeT[]) => {
    set((state) => ({
      boardTable: {
        ...state.boardTable,
        [projectId]: { nodes, edges },
      },
    }));
  },
}));

export { useBoardStore };
