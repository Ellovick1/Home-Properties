import React, { useState } from "react";
import Sidebar from "../../components/sidebars/MerchantSidebar";
import Navbar from "../../components/navbars/NewMerchantNavbar";
import { Outlet } from "react-router-dom";
// import AddPropertyForm from "../../components/modals/AddPropertyForm";

export const ToggleContext = React.createContext();

const MerchantDashoard = () => {
  const [showAddPropertyForm, setShowAddPropertyForm] = useState(true);

  const toggleForm = () => {
    setShowAddPropertyForm(!showAddPropertyForm);
  };

  return (
    <ToggleContext.Provider value={{ toggleForm }}>
      <div className="merchant flex bg-[#f9f9f9] ">
        <Sidebar />
        <div className="merchantContainer w-full h-fit bg-[#f9f9f9]  ml-12 md:ml-0">

          <Navbar />
          <Outlet />
        </div>

      </div>
    </ToggleContext.Provider>
  );
};

export default MerchantDashoard;
