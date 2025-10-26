import React from "react";
import { BaseEdge, EdgeLabelRenderer, getBezierPath, useReactFlow, type EdgeProps, type Edge } from "@xyflow/react";
import type { EdgeMetadata } from "@/lib/type";

export type PlainEdge = Edge<{ edgeMetadata: EdgeMetadata }>;

const CustomEdge = (props: EdgeProps<PlainEdge>) => {
  const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const onEdgeClick = () => {
    console.log("edge clicked");
  };
  console.log();
  return (
    <>
      <BaseEdge path={edgePath} onClick={onEdgeClick} />
      <EdgeLabelRenderer>
        <div>edge!</div>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
