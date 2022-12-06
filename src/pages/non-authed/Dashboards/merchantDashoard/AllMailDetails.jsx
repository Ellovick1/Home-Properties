import React from 'react';
import { useState } from 'react';
import AllMailsDetails from "../../../../components/merchantDashboard/Messages/AllMailDetails";

const Home = () => {

  const [activeClass, setActiveClass] = useState("allMails");

  return (
    <div className="home">
      <AllMailsDetails 
       activeClass={activeClass}
       setActiveClass={setActiveClass} />

    </div>
  );
};

export default Home;
