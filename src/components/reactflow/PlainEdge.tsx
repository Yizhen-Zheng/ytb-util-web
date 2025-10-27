import React from "react";
import { BaseEdge, EdgeLabelRenderer, getBezierPath, useReactFlow, type EdgeProps, type Edge } from "@xyflow/react";
import type { EdgeMetadata } from "@/lib/type";

export type PlainEdge = Edge<{ edgeMetadata: EdgeMetadata }>;

const PlainEdge = (props: EdgeProps<PlainEdge>) => {
  const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const { label, labelStyle, markerStart, markerEnd, interactionWidth } = props;

  const onEdgeClick = () => {
    console.log("edge clicked");
  };
  console.log(props);
  return (
    <>
      <BaseEdge
        path={edgePath}
        label={label}
        labelStyle={labelStyle}
        markerEnd={markerEnd}
        markerStart={markerStart}
        interactionWidth={interactionWidth}
        onClick={onEdgeClick}
      />
      <EdgeLabelRenderer>
        <div>edge!</div>
      </EdgeLabelRenderer>
    </>
  );
};

export default PlainEdge;
