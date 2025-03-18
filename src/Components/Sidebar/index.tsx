import React from "react";
import { useNavigate } from "react-router-dom";
import { crmSidebarLinks, SidebarLinks } from "./data";
import SidebarLayout from "./SidebarLayout";
import useCurrentPath from "../../Hooks/useCurrentPath";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const activeLink = useCurrentPath();

  const handleNavigation = (url: string) => {
    navigate(url);
  };

  const renderLinks = (links: SidebarLinks[]) => {
    console.log("Rendering links:", links); // Debugging line
    return links.map(({ id, title, image, url }) => (
      <div
        key={id}
        onClick={() => handleNavigation(url)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleNavigation(url)}
        aria-label={`Navigate to ${title}`}
        className="py-[1px] cursor-pointer hover:bg-gray-600 transition-colors duration-200"
        style={{
          background: url === activeLink[1] 
            ? "linear-gradient(270deg, #FFF -47.16%, rgba(255, 255, 255, 0.00) 72.88%)"
            : "",
        }}
      >
        <SidebarLayout title={title} image={image} />
      </div>
    ));
  };

  return (
    <div className="flex flex-col h-full justify-between" style={{ height: "100vh" }}>
      <div>{renderLinks(crmSidebarLinks)}</div>
    </div>
  );
};

export default Sidebar;