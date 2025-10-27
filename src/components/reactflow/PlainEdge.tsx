import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeText,
  getBezierPath,
  useReactFlow,
  type EdgeProps,
  type Edge,
} from "@xyflow/react";
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

  return (
    <>
      <BaseEdge
        path={edgePath}
        label={label}
        labelStyle={labelStyle}
        markerEnd={markerEnd}
        markerStart={markerStart}
        interactionWidth={interactionWidth}
      />
      {/* <EdgeLabelRenderer>
        <div
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
          className="edge-label-renderer__custom-edge nodrag nopan bg-amber-500"
        >
          edge
        </div>
      </EdgeLabelRenderer> */}
      <EdgeText x={labelX} y={labelY} label={"Fundation"} />
    </>
  );
};

export default PlainEdge;
