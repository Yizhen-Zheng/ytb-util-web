import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Link } from "react-router";
import { Home } from "lucide-react";

export default function DashboardBtn() {
  return (
    <Link to="/">
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Home />
          <span>Dashboard</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </Link>
  );
}
