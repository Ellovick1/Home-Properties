import React from 'react';
import { useAuthContext } from '../../../context/AuthContext'

const Home = () => {
  console.log(useAuthContext())
  const { contextData, dispatch} = useAuthContext()
  return (
    <div>
      home page view
     
    </div>
  );
}

export default Home;
