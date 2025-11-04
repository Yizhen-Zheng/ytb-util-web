import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/__tests__/mockup-data/mockup-data";
import NewProjectBtn from "@/components/buttons/NewProjectBtn";
import { Separator } from "@/components/ui/separator";
import { use } from "react";
export default function Dashboard() {
  // assume using User Info Provider
  const userName = "Aiden";
  return (
    <div className="w-full h-full flex flex-col">
      {/* header section */}
      <div className="w-full h-16 flex flex-row items-center justify-center">
        <h1 className="text-2xl font-semibold text-slate-800">Welcome, {userName} ! </h1>
      </div>
      <Separator className="opacity-50" />
      {/* project cards */}
      <div className="flex flex-col pl-12 pr-12">
        <div className="pt-4 flex justify-between">
          <h2 className="text-slate-600"> All Projects</h2>
          <NewProjectBtn />
        </div>
        <div className="flex flex-row gap-x-4 gap-y-4 pt-4 pl-0 pr-0xx pb-4">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
