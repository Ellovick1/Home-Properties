import React, { useState } from "react";
import { Link } from "react-router-dom";
// import SidebarLogo from "../../assets/react.svg";
// import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/useAuthContext";
import { MdDashboard, MdPersonOutline, MdOutlineGroups } from "react-icons/md";
import { HiArrowNarrowLeft, HiChat, HiChartSquareBar } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import { IoPaperPlaneOutline, IoSettingsOutline } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { TiArrowSync } from "react-icons/ti";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeClass, setActiveClass] = useState("");
  // const { logout } = useLogout();
  const { user } = useAuthContext();

  function handleClick() {
    logout();
  }

  return (
    <div
      className={`${
        open ? "w-60 pl-2 md:pl-0 md:w-72" : "w-12 pl-1 py-3 md:w-20"
      } py-2  duration-300 bg-[#2C2C2C] absolute left-0 top-0 z-50 md:relative h-[100vh]`}>
      <div className={`${open === true ? "" : ""} flex justify-end`}>
        <HiArrowNarrowLeft
          onClick={() => setOpen(!open)}
          className="text-white cursor-pointer mr-2 mb-6"
        />
      </div>

      <div className={` md:pl-3`}>
        <div className={`${open ? "block" : "hidden"} transition`}>
        <h3 className="text-[#FFFFFF] text-center font-semibold text-[2rem]">LOGO</h3>
          {/* <img className={`w-[8rem] ml-4`} alt="logo" src={SidebarLogo} /> */}
        </div>

        <Link
          onClick={() => setActiveClass("overview")}
          to="/merchant-dashboard"
          className={`${
            activeClass === "overview"
              ? "text-white bg-[#0092EC]"
              : "text-[#919191]"
          } mt-6 mb-3 py-2  flex items-center gap-2 transition-all pl-3 hover:text-[#0092EC] hover:bg-white`}>
          <MdDashboard className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Overview</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("properties")}
          to="/merchant-dashboard/properties"
          className={`${
            activeClass === "properties" ? "text-white bg-[#0092EC]" : "text-[#919191]"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 hover:text-[#0092EC] hover:bg-white`}>
          <FiHome className="text-xl" />
          <h3 className={`${!open && "hidden"} `}> Properties</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("tenants")}
          to="/merchant-dashboard/tenant"
          className={`${
            activeClass === "tenants" ? "text-white bg-[#0092EC]" : "text-[#919191]"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 hover:text-[#0092EC] hover:bg-white`}>
          <MdPersonOutline className="text-xl" />
          <h3 className={`${!open && "hidden"} `}> Tenants</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("fileUpload")}
          to="/merchant-dashboard/fileUpload"
          className={`${
            activeClass === "fileUpload" ? "text-white bg-[#0092EC]" : "text-[#919191]"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 hover:text-[#0092EC] hover:bg-white`}>
          <IoPaperPlaneOutline className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>File Upload</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("subscription")}
          to="/merchant-dashboard/subscription"
          className={`${
            activeClass === "subcription" ? "text-white bg-[#0092EC]" : "text-[#919191]"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 hover:text-[#0092EC] hover:bg-white`}>
          <HiChat className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Subcription</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("message")}
          to="/merchant-dashboard/message"
          className={`${
            activeClass === "message" ? "text-white bg-[#0092EC]" : "text-[#919191]"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 hover:text-[#0092EC] hover:bg-white`}>
          <BsFileEarmarkText className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Message</h3>
        </Link>

        <Link
          onClick={() => setActiveClass("settings")}
          to="/merchant-dashboard/settings"
          className={`${
            activeClass === "settings" ? "text-white bg-[#0092EC]" : "text-[#919191]"
          }  mb-3 py-2  flex items-center gap-2 transition-all pl-3 hover:text-[#0092EC] hover:bg-white`}>
          <IoSettingsOutline className="text-xl" />
          <h3 className={`${!open && "hidden"} `}>Settings</h3>
        </Link>

        <div
          onClick={handleClick} style={{background: 'rgba(0, 146, 236, 0.2)'}}
          className="absolute bottom-0 w-[94%] mb-3 pl-3 py-2 text-[#0092EC] flex items-center gap-2 cursor-pointer transition-all hover:text-[#0092EC] hover:pl-3 hover:bg-white">
          <TiArrowSync className="text-2xl" />
            <Link to='/login'>
          <h3 className={`${!open && "hidden"} `}>Logout</h3>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
