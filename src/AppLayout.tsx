import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactFlowProvider } from "@xyflow/react";
import AppSidebar from "@/components/AppSidebar";
import { Outlet } from "react-router";
export default function AppLayout() {
  return (
    <SidebarProvider>
      <ReactFlowProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger className="z-10" />
          {/* the whole right side */}
          <Outlet />
        </main>
      </ReactFlowProvider>
    </SidebarProvider>
  );
}
