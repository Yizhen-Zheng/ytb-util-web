// pages/NodeDetailsModal.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NodeInfoModalContainer from "@/components/ui/node-info-modal-container";
import { useCallback } from "react";
import { useNavigate } from "react-router";

export default function NodeDetailsModal() {
  const navigate = useNavigate();
  const close = useCallback(() => {
    navigate("..", { relative: "path" });
    //  TODO: handle delete project/node
  }, [navigate]);

  return (
    <NodeInfoModalContainer title="node.title" onClose={close}>
      <Tabs defaultValue="timetamps" className="flex flex-1 flex-col">
        <TabsList className="w-fit">
          <TabsTrigger value="timetamps">Timestamps</TabsTrigger>
          <TabsTrigger value="mindmap">Mindmap</TabsTrigger>
        </TabsList>
        <TabsContent
          value="timetamps"
          className="flex-1 overflow-auto rounded-lg border bg-background/80 p-4 text-sm shadow-sm"
        >
          <ul className="space-y-2">
            <li>Timestamp 1</li>
            <li>Timestamp 2</li>
            <li>Timestamp 3</li>
          </ul>
        </TabsContent>
        <TabsContent
          value="mindmap"
          className="flex-1 overflow-auto rounded-lg border bg-background/80 p-4 text-sm shadow-sm"
        >
          <div>Mindmap</div>
        </TabsContent>
      </Tabs>
    </NodeInfoModalContainer>
  );
}
