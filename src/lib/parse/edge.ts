import type { EdgeMetadata } from "@/lib/type";
import type { Edge } from "@xyflow/react";

const edgeMetadataToEdge = (row: EdgeMetadata): Edge => {
  return {
    id: row.id,
    source: row.source,
    target: row.target,
  };
};

export { edgeMetadataToEdge };
