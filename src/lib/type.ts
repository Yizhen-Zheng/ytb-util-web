// Sction item in Sidebar
type SectionItem = {
  id: string;
  title: string;
  defaultOpen: boolean;
  items: Array<{
    icon: string;
    name: string;
  }>;
};

export type { SectionItem };
