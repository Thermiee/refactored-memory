
import { SiCivicrm } from "react-icons/si";
import MobileSideNav from "./MobileSideNav";
import { Person } from "../../assets";

const UserNav = () => {
  return (
    <nav className="bg-white border-gray border-solid shadow-lg max-h-16 md:fixed w-full top-0 z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto p-2 px-3 md:p-3 md:px-10">
        <div className="flex items-center">
          <h1 className="text-sm flex font-semibold text-gray-800">Thermiee CRM <span 
          className="text-primary ml-2"
          ><SiCivicrm /></span></h1>
        </div>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse items-center">
          <div className="flex items-center space-x-3 justify-center">
            <img src={Person} alt="Avatar" className="md:w-8 md:h-8 w-4 h-4" />
          </div>

          <div className="flex items-center">
            <p className="text-xl font-semibold text-gray-600">Admin</p>
          </div>
          <div className=" md:hidden">
            <MobileSideNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
