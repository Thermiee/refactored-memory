import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crmSidebarLinks, crmBottomLinks, SidebarLinks } from "./data";
import SidebarLayout from "./SidebarLayout";
import useCurrentPath from "../../Hooks/useCurrentPath";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const MobileSideNav: React.FC = () => {
  const navigate = useNavigate();
  const activeLink = useCurrentPath();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavigation = (url: string) => {
    navigate(url);
    setIsOpen(false); // Close sidebar after navigation
  };

  const renderLinks = (links: SidebarLinks[]) => {
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
    <div>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="p-3 lg:hidden"
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        <RxHamburgerMenu className="text-2xl text-primary" />
      </button>

      {/* Sidebar Overlay and Content */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${
          isOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        <div className="bg-primary h-full flex flex-col justify-between">
          {/* Sidebar Header */}
          <div className="m-5 flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">CRM Dashboard</h1>
            <button
              onClick={toggleSidebar}
              aria-label="Close sidebar"
              className="text-white"
            >
              <IoMdClose className="text-3xl" />
            </button>
          </div>

          {/* Main Sidebar Links */}
          <div className="flex-1 overflow-y-auto">
            {renderLinks(crmSidebarLinks)}
          </div>

          {/* Bottom CRM Links */}
          <div className="mt-auto">
            {renderLinks(crmBottomLinks)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideNav;