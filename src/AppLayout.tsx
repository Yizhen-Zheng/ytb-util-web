import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactFlowProvider } from "@xyflow/react";
import AppSidebar from "@/components/AppSidebar";
import { projects, sections } from "@/__tests__/mockup-data/mockup-data";
import { Outlet } from "react-router";
export default function AppLayout() {
  return (
    <SidebarProvider>
      <ReactFlowProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger className="absolute top-4 left-4" />
          {/* the whole right side */}
          <Outlet />
        </main>
      </ReactFlowProvider>
    </SidebarProvider>
  );
}
