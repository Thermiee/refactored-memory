import { SidebarLayoutProps } from "../../types"

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ image, title }) => (
  <div className="flex pl-6 my-4 items-center">
    {image && (
      <img src={typeof image === "string" ? image : undefined} alt={title} />
    )}

    {title && (
      <h1 className="pl-4 text-base text-white font-latoLight">
        {title}
      </h1>
    )}
  </div>
)

export default SidebarLayout
