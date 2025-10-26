import { edgeMetadatas } from "@/__tests__/mockup-data/mockup-data";
import type { EdgeMetadata } from "@/lib/type";

const getEdgeMetadatasByProjectId = async (projectId: string): Promise<EdgeMetadata[]> => {
  const em = edgeMetadatas.filter((em) => em.projectMetadataId === projectId);
  // parse
  return em;
};
export { getEdgeMetadatasByProjectId };
