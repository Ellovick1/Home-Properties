import React from "react";

const AllMailDetails = ({ activeClass, setActiveClass}) => {
  return (
    <div className="flex flex-col gap-[5rem] m-[1.5rem] py-4 px-12 rounded-[0.8rem] md:flex-row ">

    <div
      onClick={() => setActiveClass("allMails")}
      className={`${
        activeClass === "allMails"
          ? "bg-[#0092EC] text-white"
          : "text-[#7D7D7D]"
      }  px-4 py-2 flex gap-4 items-center cursor-pointer`}>
      <h3 className="font-medium">All Mail (1000)</h3>
    </div>

    <div
      onClick={() => setActiveClass("sentMails")}
      className={`${
        activeClass === "sentMails"
          ? "bg-[#0092EC] text-white"
          : "text-[#7D7D7D]"
      }  px-3 py-2 flex gap-4 items-center cursor-pointer`}>
      <h3 className="font-medium">Sent Mail</h3>
    </div>

    <div
      onClick={() => setActiveClass("queue")}
      className={`${
        activeClass === "queue"
          ? "bg-[#0092EC] text-white"
          : "text-[#7D7D7D]"
      }  px-3 py-2 flex gap-4 items-center cursor-pointer`}>
      <h3 className="font-medium">Queue</h3>
    </div>

    <div
      onClick={() => setActiveClass("trash")}
      className={`${
        activeClass === "trash"
          ? "bg-[#0092EC] text-white"
          : "text-[#7D7D7D]"
      }  px-3 py-2 flex gap-4 items-center cursor-pointer`}>
      <h3 className="font-medium">Trash</h3>
    </div>

    

</div>
  );
};

export default AllMailDetails;
