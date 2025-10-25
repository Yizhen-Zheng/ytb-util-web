import type { GraphNodeRow, VideoContentMetadata, VideoNodeData, VideoNodeT } from "@/lib/type";
import type { XYPosition } from "@xyflow/react";

const dbRowToVideoNode = (row: GraphNodeRow): VideoNodeT => {
  const vd: VideoNodeData = {
    videoContentMetadataId: row.videoContentMetadataId,
  };
  const vn = {
    id: row.videoContentMetadataId,
    type: row.type,
    position: { x: row.x, y: row.y } as XYPosition,
    data: vd,
  };
  return vn;
};

export { dbRowToVideoNode };
