import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import type { Project } from "@/lib/type";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface ProjectCardProps {
  project: Project;
}
// TODO: design card

/**
 * @description share the same instance as ProjectBtn.tsx
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="">
      <Link to={`/project/${project.id}`}>
        <CardContent className="w-full">
          {/* <AspectRatio ratio={16 / 9}> */}
          <img src={project.thumbnail} alt={project.title} />
          {/* </AspectRatio> */}
        </CardContent>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="w-full">
        {project.tags && project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </CardFooter>
    </Card>
  );
}
