import { Help, Home, Leads, Logout, Person, Reports } from "../../assets";

export interface SidebarLinks {
  id: number;
  title: string;
  url: string;
  image?: string | React.ReactElement;
  headingText: string;
}

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
        title: "Leads",
        url: "#",
        image: Leads,
        headingText: "Leads",
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
    title: "Tasks",
    url: "#",
    image: Help,
    headingText: "Tasks",
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