import { projects } from "@/__tests__/mockup-data/mockup-data";
import type { ProjectMetadata } from "@/lib/type";
//mockup query function
const getAllProjectsOfUser = async (userId: string): Promise<ProjectMetadata[]> => {
  return projects;
};

const getProjectById = async (projectId: string): Promise<ProjectMetadata | undefined> => {
  return projects.find((project) => project.id === projectId);
};

export { getAllProjectsOfUser, getProjectById };
