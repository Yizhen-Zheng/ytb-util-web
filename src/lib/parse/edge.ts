import type { EdgeMetadata } from "@/lib/type";
import type { Edge } from "@xyflow/react";

const edgeMetadataToEdge = (row: EdgeMetadata): Edge => {
  return {
    id: row.id,
    source: row.sourceNodeId,
    target: row.targetNodeId,
    type: row.type,
    data: row,
  };
};

export { edgeMetadataToEdge };
