import { projects, sections } from "@/__tests__/mockup-data/mockup-data";
import type { ProjectMetadata, SectionItem } from "@/lib/type";

type SectionShortcut = SectionItem["items"][number];

//mockup query function
const getAllProjectsOfUser = async (userId: string): Promise<ProjectMetadata[]> => {
  return projects;
};

const getProjectById = async (projectId: string): Promise<ProjectMetadata | undefined> => {
  return projects.find((project) => project.id === projectId);
};

const getSidebarSections = async (userId: string): Promise<SectionItem[]> => {
  return sections;
};

const getSectionShortcuts = async (
  userId: string,
  sectionId: SectionItem["id"],
): Promise<SectionShortcut[]> => {
  const targetSection = sections.find((section) => section.id === sectionId);
  return targetSection?.items ?? [];
};

export { getAllProjectsOfUser, getProjectById, getSidebarSections, getSectionShortcuts };
