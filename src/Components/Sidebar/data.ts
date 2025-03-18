import { Help, Home, Leads, Logout, Person, Reports } from "../../assets";
import { SidebarLinks } from "../../types";

export const crmSidebarLinks: SidebarLinks[] = [
  {
    id: 1,
    title: "Dashboard",
    url: "home",
    image: Home,
    headingText: "Dashboard",
  },
  {
    id: 2,
    title: "Tasks",
    url: "tasks",
    image: Help,
    headingText: "Tasks",
  },
  {
    id: 3,
    title: "Users",
    url: "#",
    image: Person,
    headingText: "Users",
  },

  {
    id: 4,
    title: "Leads",
    url: "#",
    image: Leads,
    headingText: "Leads",
  },

  {
    id: 5,
    title: "Reports",
    url: "#",
    image: Reports,
    headingText: "Reports",
  },
];

export const crmBottomLinks: SidebarLinks[] = [
  {
    id: 1,
    title: "Logout",
    url: "/",
    image: Logout,
    headingText: "Logout",
  },
];
