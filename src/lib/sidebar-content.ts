import SearchBtn from "@/components/buttons/sidebar/SearchBtn";
import DashboardBtn from "@/components/buttons/sidebar/DashboardBtn";
import UserBtn from "@/components/buttons/sidebar/UserBtn";
import SettingsBtn from "@/components/buttons/sidebar/SettingsBtn";
import HelpBtn from "@/components/buttons/sidebar/HelpBtn";
import TrashBtn from "@/components/buttons/sidebar/TrashBtn";

const sidebarHeader = [
  {
    text: "User",
    elem: UserBtn,
  },
];

const sidebarContent = [
  {
    text: "Search", //TODO
    elem: SearchBtn, // a search component
  },
  {
    text: "Dashboard",
    elem: DashboardBtn, // a redirect component
  },
];

const sidebarFooter = [
  {
    text: "Settings",
    elem: SettingsBtn,
  },
  {
    text: "Help",
    elem: HelpBtn,
  },
  {
    text: "Trash",
    elem: TrashBtn,
  },
];
export { sidebarHeader, sidebarContent, sidebarFooter };
