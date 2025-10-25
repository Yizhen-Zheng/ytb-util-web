import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/__tests__/mockup-data/mockup-data";
import NewProjectBtn from "@/components/buttons/NewProjectBtn";
import { Separator } from "@/components/ui/separator";
export default function Dashboard() {
  return (
    <div className="w-full bg-amber-10">
      <div className="flex flex-row w-full items-stretch">
        <h1>Dashboard</h1>
        <NewProjectBtn />
      </div>
      <Separator />
      {/* TODO: layout cards */}
      <div className="flex flex-row gap-x-4 gap-y-4 pt-4 pl-4 pr-4 pb-4">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
}
