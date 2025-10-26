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
// TODO: get cached project state from zustand

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
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !videoContentMetadata) {
    return <div>Error: {error}</div>;
  }
  return (
    <BaseNode className="">
      <Link to={`${videoContentMetadataId}`} state={{ from: location }} className="w-autp h-auto">
        <BaseNodeHeader>
          <BaseNodeHeaderTitle>videoContentMetadata.title</BaseNodeHeaderTitle>
        </BaseNodeHeader>

        <BaseNodeContent>
          <AspectRatio ratio={16 / 9}>
            <img src={videoContentMetadata.thumbnail} alt="" />
          </AspectRatio>
        </BaseNodeContent>
      </Link>
    </BaseNode>
  );
};
export default VideoNode;
