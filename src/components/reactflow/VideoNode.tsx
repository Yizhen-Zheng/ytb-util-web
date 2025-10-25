import { Link } from "react-router";
import { type Node, type NodeProps } from "@xyflow/react";

export type VideoNode = Node<{ videoContentMetadataId: string }, "videoNode">;
const VideoNode = (props: NodeProps<VideoNode>) => {
  const { data } = props;
  console.log(data.videoContentMetadataId);
  // query VideoContentMetadata by node id in VideoNodeT
  return <div>Video Node</div>;
};
export default VideoNode;
