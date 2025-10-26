import { videoContentMetadatas, videoNodeMetadatas } from "@/__tests__/mockup-data/mockup-data";
import type { VideoContentMetadata, VideoNodeMetadata } from "@/lib/type";

// implement query
const getVideoContentMetadatasByProjectId = async (projectId: string): Promise<VideoContentMetadata[]> => {
  const vcms = videoContentMetadatas.filter((vcm) => vcm.projectMetadataId === projectId);
  // parse
  return vcms;
};

const getVideoNodeMetadatasByProjectId = async (projectId: string): Promise<VideoNodeMetadata[]> => {
  const vnms = videoNodeMetadatas.filter((vnm) => vnm.projectMetadataId === projectId);
  // parse
  return vnms;
};

const getVideoContentMetadataById = async (
  videoContentMetadataId: string
): Promise<VideoContentMetadata | undefined> => {
  const vcm = videoContentMetadatas.find((vcm) => vcm.id === videoContentMetadataId);
  // parse
  return vcm;
};
export { getVideoContentMetadatasByProjectId, getVideoNodeMetadatasByProjectId, getVideoContentMetadataById };
