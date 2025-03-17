import { Home } from "../../assets"

export interface SidebarLinks {

    id: number
    title: string
    url: string
    image?: string | React.ReactElement
    headingText: string
  }

  export const sidebarLinks: SidebarLinks[] = [
    {
      id: 1,
      title: 'Dashboard',
      url: 'dashboard',
      image: Home,
      headingText: 'Dashboard',
    },
]