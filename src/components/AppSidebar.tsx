import type { SectionItem } from "@/lib/type";
import { useEffect, useRef } from "react";
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
import { sidebarHeader, sidebarContent, sidebarFooter } from "@/lib/sidebar-content";
import { Ellipsis } from "lucide-react";
interface SidebarProps {}
/*
NOTE:
The side bar both for navigating the home page, and the project page
Means user can go back to home in project page by clicking back button in the sidebar
So that we dont need another top navigation
Benifit from projects are not nested, so we dont have layers to go back and forward
*/
export default function AppSidebar() {
  const userInfo = sidebarHeader[0];
  return (
    <div className="">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          {/* TODO: popup when user is clicked */}
          <userInfo.elem />
        </SidebarHeader>

        {/* body */}
        <SidebarContent>
          {/* basic btns group */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarContent.map((item) => (
                  <item.elem key={item.text} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* foldable group 
          TODO: footer implement*/}
          <SidebarGroup>
            <SidebarGroupAction>
              <Ellipsis />
            </SidebarGroupAction>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            {/* projects */}
            <SidebarGroupContent>fake data</SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupAction>
              <Ellipsis />
            </SidebarGroupAction>
            <SidebarGroupLabel>Favorites</SidebarGroupLabel>
            {/* favorite projects */}
            <SidebarGroupContent>fake data</SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* footer */}
        <SidebarFooter></SidebarFooter>
      </Sidebar>
    </div>
  );
}
