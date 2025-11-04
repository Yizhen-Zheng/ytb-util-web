import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { FolderGit2 } from "lucide-react";
import type { ProjectMetadata } from "@/lib/type";
import { Link } from "react-router";
/**
 * @description share the same instance as ProjectCard.tsx
 */

// pick title, icon from projectMetadata

type ProjectBtnProps = Pick<ProjectMetadata, "id" | "title" | "icon">;
export default function ProjectBtn(prop: ProjectBtnProps) {
  const { id, title, icon } = prop;
  console.log(prop);
  return (
    <Link to={`/project/${id}`}>
      <SidebarMenuItem>
        <SidebarMenuButton>
          {icon ? <span>{icon}</span> : <FolderGit2 className="size-4" />}
          <h6 className="truncate">{title}</h6>
          {/* default icon: FolderGit2 */}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </Link>
  );
}
