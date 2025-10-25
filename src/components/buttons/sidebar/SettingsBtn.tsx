import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Settings } from "lucide-react";

export default function SettingsBtn() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton>
        <Settings />
        <span>Settings</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
