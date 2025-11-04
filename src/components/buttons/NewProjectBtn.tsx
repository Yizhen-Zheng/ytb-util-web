import { Button } from "../ui/button";
import { Plus } from "lucide-react";
export default function NewProjectBtn() {
  const addNewProject = () => {};
  return (
    <Button
      variant="plain"
      onClick={addNewProject}
      className="bg-linear-to-r from-green-300/50 to-[#6eebfe]/70 hover:bg-linear-to-r hover:from-[#6eebfe] hover:to-green-300/50 transition-colors duration-300 
      p-0 overflow-hidden w-36 cursor-pointer"
    >
      <div
        className="w-full h-full overflow-hidden pt-0 pb-0 flex flex-row justify-center items-center 
     text-slate-700"
      >
        <Plus size={20} className="mr-1 h-full" />
        <div className="w-fit h-full flex items-center justify-center text-sm font-semibold">New Project</div>
      </div>
    </Button>
  );
}
