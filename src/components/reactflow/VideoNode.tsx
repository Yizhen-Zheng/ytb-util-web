import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Position, type Node, type NodeProps } from "@xyflow/react";
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeFooter,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
} from "@/components/reactflow/rf-components/base-node";
import { BaseHandle } from "./rf-components/base-handle";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getVideoContentMetadataById } from "@/lib/db/node";
import type { VideoContentMetadata, VideoNodeMetadata } from "@/lib/type";

export type VideoNode = Node<{ metadata: VideoNodeMetadata }, "videoNode">;

// TODO: use cached data instead of fetching every time
// (handle cache outside of the component if possible, or use State)
const VideoNode = (props: NodeProps<VideoNode>) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation(); // load content seperate from RF ui
  const { metadata } = props.data;
  const [videoContentMetadata, setVideoContentMetadata] = useState<VideoContentMetadata>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const videoContentMetadata = await getVideoContentMetadataById(metadata.videoContentMetadataId);
        setVideoContentMetadata(videoContentMetadata);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [metadata.videoContentMetadataId]); // Added dependency array

  if (loading) {
    return (
      <BaseNode className="w-[320px]">
        <Link to={`${metadata.videoContentMetadataId}`} state={{ from: location }} className="block">
          <BaseNodeContent className="p-0">
            <BaseHandle position={Position.Top} type="source" />
            <BaseHandle position={Position.Bottom} type="target" />
          </BaseNodeContent>

          <BaseNodeHeader className="p-3">
            <BaseNodeHeaderTitle className="text-sm font-medium line-clamp-2">
              <span>Loading...</span>
            </BaseNodeHeaderTitle>
          </BaseNodeHeader>
        </Link>
      </BaseNode>
    );
  }

  if (error || !videoContentMetadata) {
    return (
      <BaseNode className="w-[320px]">
        <Link to={`${metadata.videoContentMetadataId}`} state={{ from: location }} className="block">
          <BaseNodeContent className="p-0">
            <BaseHandle position={Position.Top} type="source" />
            <BaseHandle position={Position.Bottom} type="target" />
          </BaseNodeContent>

          <BaseNodeHeader className="p-3">
            <BaseNodeHeaderTitle className="text-sm font-medium line-clamp-2">
              <span>Error: {error}</span>
            </BaseNodeHeaderTitle>
          </BaseNodeHeader>
        </Link>
      </BaseNode>
    );
  }

  return (
    <BaseNode className="w-[320px]">
      <Link to={`${metadata.videoContentMetadataId}`} state={{ from: location }} className="block">
        <BaseNodeContent className="p-0">
          <BaseHandle position={Position.Top} type="source" />
          <BaseHandle position={Position.Bottom} type="target" />
          <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-t-lg">
            <img
              src={videoContentMetadata.thumbnail}
              alt={videoContentMetadata.title}
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </BaseNodeContent>

        <BaseNodeHeader className="p-3">
          <BaseNodeHeaderTitle className="text-sm font-medium line-clamp-2">
            {videoContentMetadata.title}
          </BaseNodeHeaderTitle>
        </BaseNodeHeader>
      </Link>
    </BaseNode>
  );
};

export default VideoNode;
