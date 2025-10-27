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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getAllProjectsOfUser, getSectionShortcuts } from "@/lib/db/project";
import { sidebarHeader, sidebarContent, sidebarFooter } from "@/lib/sidebar-content";
import { Ellipsis, FolderGit2, Star } from "lucide-react";

type SectionShortcut = SectionItem["items"][number];

const MOCK_USER_ID = "mock-user";
/*
NOTE:
The side bar both for navigating the home page, and the project page
Means user can go back to home in project page by clicking back button in the sidebar
So that we dont need another top navigation
Benifit from projects are not nested, so we dont have layers to go back and forward
*/
export default function AppSidebar() {
  const userInfo = sidebarHeader[0];
  const [projects, setProjects] = useState<ProjectMetadata[]>([]);
  const [favoriteShortcuts, setFavoriteShortcuts] = useState<SectionShortcut[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadSidebarData = async () => {
      try {
        const [projectItems, favorites] = await Promise.all([
          getAllProjectsOfUser(MOCK_USER_ID),
          getSectionShortcuts(MOCK_USER_ID, "favorites"),
        ]);

        if (!isMounted) {
          return;
        }

        setProjects(projectItems);
        setFavoriteShortcuts(favorites);
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
  const hasFavorites = favoriteShortcuts.length > 0;

  const favoriteItems = useMemo(
    () =>
      favoriteShortcuts.map((item) => ({
        key: `${item.icon}-${item.name}`,
        icon: item.icon,
        label: item.name,
      })),
    [favoriteShortcuts]
  );

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
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton>
                    <FolderGit2 className="size-4" />
                    <span className="truncate">{project.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
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
              {!isLoading && !hasFavorites && (
                <SidebarMenuItem>
                  <SidebarMenuButton disabled>
                    <Star className="size-4" />
                    <span>No favorites yet</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
              {favoriteItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton>
                    <span aria-hidden="true" className="text-base">
                      {item.icon}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
