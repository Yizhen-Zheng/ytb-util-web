import { useMemo, useState } from "react";
import Sidebar from "@/components/sidebar";
import Card from "@/components/card";
import { projects, sections } from "@/../__tests__/mockup-data/mockup-data";
export default function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(300);

  return (
    <div>
      <h1 className="text-red-400">Dashboard</h1>
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
        width={sidebarWidth}
        setWidth={setSidebarWidth}
        sections={sections}
      />
      <h1>Welcome to Your Workspace</h1>
      <p>This is your main content area. The sidebar can be collapsed using the toggle button.</p>

      {/* <div className="card-container">
        {projects.map((p) => (
          <Card title={p.title} thumbnail={p.thumbnail} />
        ))}
      </div> */}
    </div>
  );
}
