import { videoContentMetadatas, graphNodeRows } from "@/__tests__/mockup-data/mockup-data";
import type { VideoContentMetadata, GraphNodeRow } from "@/lib/type";

// implement query
const getVideoContentMetadataByProjectId = async (projectId: string): Promise<VideoContentMetadata[]> => {
  const vcm = videoContentMetadatas.filter((vcm) => vcm.projectMetadataId === projectId);
  // parse
  return vcm;
};

const getGraphNodeRowsByProjectId = async (projectId: string): Promise<GraphNodeRow[]> => {
  const gnr = graphNodeRows.filter((gnr) => gnr.projectMetadataId === projectId);
  // parse
  return gnr;
};

export { getVideoContentMetadataByProjectId, getGraphNodeRowsByProjectId };
