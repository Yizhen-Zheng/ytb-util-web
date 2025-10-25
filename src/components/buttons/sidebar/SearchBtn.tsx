import { SidebarMenuItem, SidebarMenuButton } from "../../ui/sidebar";
import { Search } from "lucide-react";

export default function SearchBtn() {
  const handleSearch = () => {
    console.log("search");
  };
  return (
    <SidebarMenuItem key={"search"}>
      <SidebarMenuButton onClick={handleSearch}>
        <Search />
        <span>Search</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
