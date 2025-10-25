import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Trash } from "lucide-react";

export default function TrashBtn() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton>
        <Trash />
        <span>Trash</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
