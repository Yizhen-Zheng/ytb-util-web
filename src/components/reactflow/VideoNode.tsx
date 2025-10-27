import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { type Node, type NodeProps } from "@xyflow/react";
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeFooter,
  BaseNodeHeader,
  BaseNodeHeaderTitle,
} from "@/components/reactflow/base-node";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getVideoContentMetadataById } from "@/lib/db/node";
import type { VideoContentMetadata } from "@/lib/type";

export type VideoNode = Node<{ videoContentMetadataId: string }, "videoNode">;

const VideoNode = (props: NodeProps<VideoNode>) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const { videoContentMetadataId } = props.data;
  const [videoContentMetadata, setVideoContentMetadata] = useState<VideoContentMetadata>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const videoContentMetadata = await getVideoContentMetadataById(videoContentMetadataId);
        setVideoContentMetadata(videoContentMetadata);
        console.log(videoContentMetadata);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [videoContentMetadataId]); // Added dependency array

  if (loading) {
    return (
      <BaseNode className="w-[320px]">
        <div className="p-4">Loading...</div>
      </BaseNode>
    );
  }

  if (error || !videoContentMetadata) {
    return (
      <BaseNode className="w-[320px]">
        <div className="p-4">Error: {error}</div>
      </BaseNode>
    );
  }

  return (
    <BaseNode className="w-[320px]">
      <Link to={`${videoContentMetadataId}`} state={{ from: location }} className="block">
        <BaseNodeContent className="p-0">
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
