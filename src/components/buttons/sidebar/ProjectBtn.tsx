import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { FolderGit2 } from "lucide-react";

/**
 * @description share the same instance as ProjectCard.tsx
 */
export default function ProjectBtn() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton>
        {/* default icon: FolderGit2 */}
        <FolderGit2 />
        <span>Project Name</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
