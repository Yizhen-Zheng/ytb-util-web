import type { SectionItem } from "@/lib/type";
import { useEffect, useRef } from "react";
import SidebarSection from "@/components/sidebar-section";
interface SidebarProps {
  sections: SectionItem[];
}

export default function Sidebar({ sections }: SidebarProps) {
  const sidebarRef = useRef(null);
  const isDraggingRef = useRef(false);

  return <div className="sidebar"></div>;
}
