import { videoContentMetadatas, videoNodeMetadatas } from "@/__tests__/mockup-data/mockup-data";
import type { VideoContentMetadata, VideoNodeMetadata } from "@/lib/type";

// implement query
const getVideoContentMetadataByProjectId = async (projectId: string): Promise<VideoContentMetadata[]> => {
  const vcm = videoContentMetadatas.filter((vcm) => vcm.projectMetadataId === projectId);
  // parse
  return vcm;
};

const getVideoNodeMetadatasByProjectId = async (projectId: string): Promise<VideoNodeMetadata[]> => {
  const vnm = videoNodeMetadatas.filter((vnm) => vnm.projectMetadataId === projectId);
  // parse
  return vnm;
};

export { getVideoContentMetadataByProjectId, getVideoNodeMetadatasByProjectId };
