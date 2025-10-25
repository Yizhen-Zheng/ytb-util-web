import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BoardState, ProjectMetadata, ProjectBoard } from "@/lib/type";
import type { Node, Edge } from "@xyflow/react";
import { boards } from "@/__tests__/mockup-data/mockup-data";

const useBoardStore = create<BoardState>()(
  persist(
    (set, get) => ({
      boards: {}, // TODO: load from 'DB'
      getBoard: (projectId: string) => get().boards[projectId],
      upsertBoard: (projectId: string, board: ProjectBoard) =>
        set((s) => ({ boards: { ...s.boards, [projectId]: board } })),
      upsertProject: (projectId: string, patch: Partial<ProjectBoard>) =>
        set((s) => ({ boards: { ...s.boards, [projectId]: { ...s.boards[projectId], ...patch } } })),
    }),
    {
      name: "board-store",
    }
  )
);

export { useBoardStore };
