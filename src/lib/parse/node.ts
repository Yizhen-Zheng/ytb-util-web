import type { VideoNodeMetadata, ProjectBoard, VideoContentMetadata } from "@/lib/type";
import type { XYPosition, Node } from "@xyflow/react";
import type { VideoNode } from "@/components/reactflow/VideoNode";
const videoNodeMetadataToVideoNode = (row: VideoNodeMetadata): VideoNode => {
  const vn: VideoNode = {
    id: row.id,
    type: row.type,
    position: { x: row.x, y: row.y } as XYPosition,
    data: row, //handle info(change props in VideoNode.tsx)
  };
  return vn;
};

// }
export { videoNodeMetadataToVideoNode };
