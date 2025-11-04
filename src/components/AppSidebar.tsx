import type { SectionItem, ProjectMetadata } from "@/lib/type";
import { useEffect, useMemo, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { getAllProjectsOfUser } from "@/lib/db/project";
import { sidebarHeader, sidebarContent, sidebarFooter } from "@/lib/sidebar-content";
import { Ellipsis, FolderGit2, Star } from "lucide-react";
import ProjectBtn from "./buttons/sidebar/ProjectBtn";
const MOCK_USER_ID = "mock-user";
/*
NOTE:
The side bar both for navigating the home page, and the project page
Means user can go back to home in project page by clicking back button in the sidebar
So that we dont need another top navigation
Benifit from projects are not nested, so we dont have layers to go back and forward
*/
export default function AppSidebar() {
  const [projects, setProjects] = useState<ProjectMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadSidebarData = async () => {
      try {
        const [projectItems] = await Promise.all([getAllProjectsOfUser(MOCK_USER_ID)]);

        if (!isMounted) {
          return;
        }

        setProjects(projectItems);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadSidebarData();
    return () => {
      isMounted = false;
    };
  }, []);

  const hasProjects = projects.length > 0;

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          {sidebarHeader.map((item) => (
            <item.elem key={item.text} />
          ))}
        </SidebarMenu>
      </SidebarHeader>

      {/* body */}
      <SidebarContent>
        {/* primary navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarContent.map((item) => (
                <item.elem key={item.text} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* projects */}
        <SidebarGroup>
          <SidebarGroupAction aria-label="Project actions">
            <Ellipsis />
          </SidebarGroupAction>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {isLoading && (
                <SidebarMenuItem>
                  <SidebarMenuButton disabled>
                    <FolderGit2 className="size-4" />
                    <span>Loading projects...</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
              {!isLoading && !hasProjects && (
                <SidebarMenuItem>
                  <SidebarMenuButton disabled>
                    <FolderGit2 className="size-4" />
                    <span>No projects yet</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
              {projects.map((project) => (
                <ProjectBtn key={project.id} id={project.id} title={project.title} icon={project.icon} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* favorites */}
        <SidebarGroup>
          <SidebarGroupAction aria-label="Favorite actions">
            <Ellipsis />
          </SidebarGroupAction>
          <SidebarGroupLabel>Favorites</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {isLoading && (
                <SidebarMenuItem>
                  <SidebarMenuButton disabled>
                    <Star className="size-4" />
                    <span>Loading favorites...</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
              {!isLoading && (
                <SidebarMenuItem>
                  <SidebarMenuButton disabled>
                    <Star className="size-4" />
                    <span>No favorites yet</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* footer */}
      <SidebarFooter>
        <SidebarMenu>
          {sidebarFooter.map((item) => (
            <item.elem key={item.text} />
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
