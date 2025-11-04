import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import type { ProjectMetadata } from "@/lib/type";
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
  project: ProjectMetadata;
}
// TODO: design card

/**
 * @description share the same instance as ProjectBtn.tsx
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/project/${project.id}`} className="">
      <Card
        className="relative w-60 h-52 overflow-hidden group pt-0 pb-0 rounded-2xl flex flex-col-reverse
    hover: hover:ease-in-out hover:scale-102 duration-200 transition-all cursor-pointer"
      >
        {/* bg */}
        <div className="absolute z-0 inset-0 w-full h-full bg-linear-to-r from-teal-200/80 to-sky-200 opacity-70 group-hover:opacity-100 transition-all"></div>
        {/* content */}
        <div className="relative  z-10 w-full rounded-t-2xl bg-white  h-2/3 bottom-0 grid grid-rows-[2fr_1fr]">
          <div className="w-full flex-1 pl-2.5 pt-2 ">
            <h4 className="text-lg text-slate-800">{project.title}</h4>
          </div>
          {/* <div>
            <p className="w-full pl-2.5 pt-2 text-sm text-slate-600">{project.description}</p>
          </div> */}
          <div className="w-full h-full flex items-center justify-center pb-1">
            <div className="mx-2 w-full flex flex-row gap-1.5 overflow-hidden ">
              {project.tags &&
                project.tags.map((tag) => (
                  <Badge key={tag} className="rounded-[4px] bg-[#6cdcea]/20 text-slate-500">
                    {tag}
                  </Badge>
                ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

//// Detect overflow:
//
// import { useEffect, useRef, useState } from "react";
// import { Badge } from "@/components/ui/badge";

// function OverflowTags({ tags }: { tags: string[] }) {
//   const rowRef = useRef<HTMLDivElement | null>(null);
//   const [isOverflowing, setIsOverflowing] = useState(false);

//   useEffect(() => {
//     const el = rowRef.current;
//     if (!el) return;

//     const check = () => setIsOverflowing(el.scrollWidth > el.clientWidth);
//     check();

//     const ro = new ResizeObserver(check);
//     ro.observe(el);
//     // also re-check when fonts load etc.
//     window.addEventListener("load", check);
//     return () => {
//       ro.disconnect();
//       window.removeEventListener("load", check);
//     };
//   }, [tags]);

//   return (
//     <div className="relative mx-2 w-full">
//       <div
//         ref={rowRef}
//         className="flex flex-row gap-1.5 overflow-hidden pr-6" // leave space for the dots
//       >
//         {tags.map((tag) => (
//           <Badge key={tag} className="rounded-[4px] bg-[#6cdcea]/20 text-slate-500 shrink-0">
//             {tag}
//           </Badge>
//         ))}
//       </div>

//       {isOverflowing && (
//         <>
//           {/* subtle fade at the right edge */}
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-10
//                           [mask-image:linear-gradient(to_right,transparent,black)]
//                           bg-white/80"></div>
//           {/* the "..." badge */}
//           <div className="pointer-events-none absolute right-1 bottom-1">
//             <Badge className="rounded-[4px] bg-slate-200/70 text-slate-500">…</Badge>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
