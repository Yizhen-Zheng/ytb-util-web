import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { HelpCircle } from "lucide-react";

export default function HelpBtn() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton>
        <HelpCircle />
        <span>Help</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
