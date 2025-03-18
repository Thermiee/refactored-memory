import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'

const DashboardLayout: React.FC = () => {
  return (
    <div className="bg-white overflow-x-hidden w-screen h-screen relative">
\
    <div className="flex p-2 ">
      <nav className=" py-2 z-20 md:flex-[.2] lg:flex-[.15] h-[89vh] mt-14 rounded-lg fixed top-0 w-[19%] hidden md:block">
        <div
          className="flex flex-col rounded-lg h-full items-center w-full "
          style={{
            background: "linear-gradient(180deg, #092428 0%, #0E5159 100%)",
          }}
        >
          <div className="w-full mt-24 h-full">
            <Sidebar /> 
          </div>
        </div>
      </nav>
      {/* <div className="w-[98vw] md:my-[70px] md:pl-48 lg:pl-[21vw] mb-[70px]"> */}
      <div className="w-[98vw] sm:w-[97vw] lg:w-[98vw] md:my-[70px] md:pl-48 md:w-[96vw] lg:pl-[21vw] mb-[70px]">
        <Outlet />
      </div>
    </div>

  </div>
  )
}

export default DashboardLayout