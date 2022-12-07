import React, { useState } from "react";
import Avatar from '../../assets/Dashboard-Imags/avatar.svg'
import Notification from '../../assets/notification.svg'

const NewMerchantNavbar = () => {
  const [searchInput, setSearchInput] = useState(false);
  //   let showCancelSearch = true;

  const toggleSearchInput = () => {
    // showCancelSearch == true
    //   ? (showCancelSearch = false)
    //   : (showCancelSearch = true);

    setSearchInput(!searchInput);
  };

  return (
    <nav
      className="relative bg-white py-4 w-full border flex justify-between items-center px-2 md:px-8
    ">
      <div>
        <h4 className="font-Manrope font-bold text-[#4C4C4C]">Welcome, Owai👋</h4>
        <p className="text-[#A7A7A7] font-500">Here’ what’s happening in your account today.</p>
      </div>
     
     <div className="flex items-center space-x-1">
      <div className="bg-[#F5F4F7] rounded-xl max-w-md w-full  items-end px-8 mr-8 hidden sm:flex sm:gap-3">
        <i className="bi bi-search text-[#BBBABD] text-[20px]"></i>
        <input
          type="text"
          placeholder="Search by full name, text"
          className=" rounded-3xl outline-none pl-1 py-2 bg-transparent"
        />
         
      </div>
      <div className="flex items-center">
    <div>
    <img
            src={Avatar}
            alt="img"
            className="object-cover w-full h-full "
            />
        </div>
              <div className="w-28">
              <h4 className="font-Manrope text-[9px] font-bold text-[#4C4C4C]">Owai Owai</h4>
              <p className="text-[#A7A7A7] font-500 text-[9px]">Property Owner</p>
              </div>
           <div className="bg-[#F5F4F7] ml-4 p-2 rounded-full">
           <img
            src={Notification}
            alt="img"
            className="object-cover w-full h-full "
            />
           </div>
            </div>
       </div> 
       {/* <div className="relative max-w-[250px] w-full">
        {searchInput == false ? (
          <i
            className="bi bi-search text-black text-[20px] inline sm:hidden"
            onClick={toggleSearchInput}></i>
        ) : (
          <i
            className="bi bi-x-lg inline sm:hidden"
            onClick={toggleSearchInput}></i>
        )}
        {searchInput && (
          <div className="max-w-md w-full absolute bg-white rounded-3xl border   items-center px-4 flex gap-3 sm:hidden">
            <i className="bi bi-search text-grayClr text-[20px]"></i>
            <input
              type="text"
              placeholder="Search"
              className="w-full  rounded-3xl outline-none pl-1 py-2 "
            />
          </div>
        )}
      </div> */}

    </nav>
     
  );
};

export default NewMerchantNavbar;
