import type { VideoNodeMetadata, ProjectBoard, VideoContentMetadata } from "@/lib/type";
import type { XYPosition, Node } from "@xyflow/react";

const videoNodeMetadataToVideoNode = (row: VideoNodeMetadata): Node => {
  const vn = {
    id: row.videoContentMetadataId,
    type: row.type,
    position: { x: row.x, y: row.y } as XYPosition,
    data: { videoContentMetadataId: row.videoContentMetadataId },
  };
  return vn;
};

// }
export { videoNodeMetadataToVideoNode };
