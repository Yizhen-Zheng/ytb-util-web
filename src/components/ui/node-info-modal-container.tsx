import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
type ResizeCorner = "nw" | "ne" | "sw" | "se";

interface ActiveInteraction {
  pointerId: number;
  startPointer: { x: number; y: number };
  startPosition: { x: number; y: number };
  startDimensions: { width: number; height: number };
  mode: "drag" | "resize";
  corner?: ResizeCorner;
}

interface NodeInfoModalContainerProps {
  title: ReactNode;
  onClose: () => void;
  children: ReactNode;
}

const MIN_WIDTH = 320;
const MIN_HEIGHT = 240;

export default function NodeInfoModalContainer({ title, onClose, children }: NodeInfoModalContainerProps) {
  const [position, setPosition] = useState({ x: 72, y: 72 });
  const [dimensions, setDimensions] = useState({ width: 480, height: 420 });
  const [isInteracting, setIsInteracting] = useState(false);

  const positionRef = useRef(position);
  const dimensionsRef = useRef(dimensions);
  const interactionRef = useRef<ActiveInteraction | null>(null);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    dimensionsRef.current = dimensions;
  }, [dimensions]);

  useEffect(() => {
    if (!isInteracting) {
      return;
    }
    const previous = document.body.style.userSelect;
    document.body.style.userSelect = "none";
    return () => {
      document.body.style.userSelect = previous;
    };
  }, [isInteracting]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const clamp = (value: number, min: number, max: number) => {
    if (max < min) return min;
    return Math.min(Math.max(value, min), max);
  };

  const finishInteraction = () => {
    interactionRef.current = null;
    setIsInteracting(false);
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    window.removeEventListener("pointercancel", handlePointerUp);
  };

  const handlePointerMove = (event: PointerEvent) => {
    const interaction = interactionRef.current;
    if (!interaction || interaction.pointerId !== event.pointerId) {
      return;
    }

    const viewportWidth =
      typeof window === "undefined"
        ? interaction.startPosition.x + interaction.startDimensions.width
        : window.innerWidth;
    const viewportHeight =
      typeof window === "undefined"
        ? interaction.startPosition.y + interaction.startDimensions.height
        : window.innerHeight;

    const maxX = Math.max(0, viewportWidth - dimensionsRef.current.width);
    const maxY = Math.max(0, viewportHeight - dimensionsRef.current.height);
    const deltaX = event.clientX - interaction.startPointer.x;
    const deltaY = event.clientY - interaction.startPointer.y;

    if (interaction.mode === "drag") {
      const nextX = clamp(interaction.startPosition.x + deltaX, 0, maxX);
      const nextY = clamp(interaction.startPosition.y + deltaY, 0, maxY);
      setPosition({ x: nextX, y: nextY });
      return;
    }

    const { startDimensions, startPosition } = interaction;
    let nextWidth = startDimensions.width;
    let nextHeight = startDimensions.height;
    let nextX = startPosition.x;
    let nextY = startPosition.y;

    if (interaction.corner?.includes("e")) {
      nextWidth = Math.max(MIN_WIDTH, startDimensions.width + deltaX);
    }
    if (interaction.corner?.includes("s")) {
      nextHeight = Math.max(MIN_HEIGHT, startDimensions.height + deltaY);
    }
    if (interaction.corner?.includes("w")) {
      const widthFromWest = Math.max(MIN_WIDTH, startDimensions.width - deltaX);
      nextX = startPosition.x + (startDimensions.width - widthFromWest);
      nextWidth = widthFromWest;
    }
    if (interaction.corner?.includes("n")) {
      const heightFromNorth = Math.max(MIN_HEIGHT, startDimensions.height - deltaY);
      nextY = startPosition.y + (startDimensions.height - heightFromNorth);
      nextHeight = heightFromNorth;
    }

    nextX = clamp(nextX, 0, Math.max(0, viewportWidth - MIN_WIDTH));
    nextY = clamp(nextY, 0, Math.max(0, viewportHeight - MIN_HEIGHT));

    const widthLimit = viewportWidth - nextX;
    const heightLimit = viewportHeight - nextY;

    nextWidth = clamp(nextWidth, MIN_WIDTH, widthLimit || MIN_WIDTH);
    nextHeight = clamp(nextHeight, MIN_HEIGHT, heightLimit || MIN_HEIGHT);

    setPosition({ x: nextX, y: nextY });
    setDimensions({ width: nextWidth, height: nextHeight });
  };

  const handlePointerUp = (event: PointerEvent) => {
    const interaction = interactionRef.current;
    if (!interaction || interaction.pointerId !== event.pointerId) {
      return;
    }
    finishInteraction();
  };

  const startInteraction = (
    event: ReactPointerEvent<HTMLElement>,
    payload: { mode: "drag" } | { mode: "resize"; corner: ResizeCorner }
  ) => {
    event.preventDefault();
    event.stopPropagation();
    if (typeof window === "undefined") {
      return;
    }
    interactionRef.current = {
      pointerId: event.pointerId,
      startPointer: { x: event.clientX, y: event.clientY },
      startPosition: positionRef.current,
      startDimensions: dimensionsRef.current,
      ...payload,
    };
    setIsInteracting(true);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  useEffect(() => {
    return () => finishInteraction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandlePointerDown = (corner: ResizeCorner) => (event: ReactPointerEvent<HTMLElement>) =>
    startInteraction(event, { mode: "resize", corner });

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <Card
        role="dialog"
        aria-modal
        className={`pointer-events-auto absolute left-0 top-0 h-auto gap-0 overflow-hidden border bg-card text-card-foreground shadow-lg py-0 ${
          isInteracting ? "select-none" : ""
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
      >
        <CardHeader
          onPointerDown={(event) => startInteraction(event, { mode: "drag" })}
          className={
            `border-b py-3 ${isInteracting ? "cursor-grabbing" : "cursor-grab"}` +
            "flex items-center justify-between space-x-2 px-6"
          }
        >
          <div className="flex items-center justify-between space-x-2 top-0 bottom-0">
            <CardTitle className="h-full top-0 bottom-0 text-sm font-semibold uppercase tracking-wide">
              {title}
            </CardTitle>
            <CardAction>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={onClose}
              >
                <X />
              </Button>
            </CardAction>
          </div>
        </CardHeader>
        <CardContent className="flex min-h-0 flex-1 flex-col gap-4 px-6 py-4">{children}</CardContent>
        <button
          aria-label="Resize from top left"
          type="button"
          onPointerDown={onHandlePointerDown("nw")}
          className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 cursor-nwse-resize rounded-sm bg-border"
        />
        <button
          aria-label="Resize from top right"
          type="button"
          onPointerDown={onHandlePointerDown("ne")}
          className="absolute right-0 top-0 h-3 w-3 translate-x-1/2 -translate-y-1/2 cursor-nesw-resize rounded-sm bg-border"
        />
        <button
          aria-label="Resize from bottom left"
          type="button"
          onPointerDown={onHandlePointerDown("sw")}
          className="absolute bottom-0 left-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 cursor-nesw-resize rounded-sm bg-border"
        />
        <button
          aria-label="Resize from bottom right"
          type="button"
          onPointerDown={onHandlePointerDown("se")}
          className="absolute bottom-0 right-0 h-3 w-3 translate-x-1/2 translate-y-1/2 cursor-nwse-resize rounded-sm bg-border"
        />
      </Card>
    </div>
  );
}
