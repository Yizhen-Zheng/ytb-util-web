// pages/NodeDetailsModal.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NodeInfoModalContainer from "@/components/ui/container/NodeInfoModalContainer";
import { useCallback, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import type { VideoContentMetadata } from "@/lib/type";
import { getVideoNodeMetadatasByProjectId, getVideoContentMetadataById } from "@/lib/db/node";

export default function NodeDetailsModal() {
  const navigate = useNavigate();
  const close = useCallback(() => {
    navigate("..", { relative: "path" });
  }, [navigate]);
  //  TODO: handle delete project/node
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const projectId = useParams().projectId;
  const nodeId = useParams().nodeId;
  if (!projectId || !nodeId) {
    return <div>Invalid project or node ID</div>;
  }
  // TODO: use store
  const [videoContentMetadata, setVideoContentMetadata] = useState<VideoContentMetadata>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const videoContentMetadata = await getVideoContentMetadataById(nodeId);
        setVideoContentMetadata(videoContentMetadata);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [nodeId, projectId]);

  if (error || !videoContentMetadata) {
    return <div>Error: {error}</div>;
  }
  return (
    <NodeInfoModalContainer title={loading ? "Loading..." : videoContentMetadata.title} onClose={close}>
      <Tabs defaultValue="timetamps" className="flex flex-1 flex-col">
        <TabsList className="w-fit ">
          <TabsTrigger value="timetamps">Notes/Timestamps</TabsTrigger>
          <TabsTrigger value="mindmap">Mindmap</TabsTrigger>
        </TabsList>
        <TabsContent value="timetamps" className="flex-1 overflow-auto rounded-lg  bg-background/80 p-0 text-sm ">
          <ul className="space-y-2">
            <li>Timestamp 1</li>
            <li>Timestamp 2</li>
            <li>Timestamp 3</li>
          </ul>
        </TabsContent>
        <TabsContent value="mindmap" className="flex-1 overflow-auto rounded-lg  bg-background/80 p-0 text-sm ">
          <div>Mindmap</div>
        </TabsContent>
      </Tabs>
    </NodeInfoModalContainer>
  );
}
