import React from "react";
import {useState}  from "react";
import { Link } from 'react-router-dom';

const SubcriptionPlans = (props) => {
console.log(props);

const [activeClass, setActiveClass] = useState("");

const handleSubmit =  e => {
    e.preventDefault();
    
  
      }

    return (
        <form  onSubmit={handleSubmit} className="flex gap-5 justify-center">
            {props.details.map((value, index) => (

                <div key={index} >
                    <div className="bg-white p-4 w-[20rem] text-center">
                       <div className="">
                            <p className="font-bold text-[25px] mb-0 flex place-items-center justify-center gap-2"> <div><img  src={value.img }   className="object-cover w-full h-full " /></div> {value.subcriptionName} </p>
                            <p className="font-medium text-[#4C4C4C] text-[20px]">{value.contacts}</p>
                        
                       </div>

                        <div className="py-[3rem]">
                            <p className="py-2 font-medium text-[#4C4C4C] text-[20px]">Quaterly</p>
                            <p className="py-2 font-medium text-[#4C4C4C] text-[20px]">Bi-annually</p>
                            <p className="py-2 font-medium text-[#4C4C4C] text-[20px]">Annually</p>
                        </div>

                        <Link to="/merchant-dashboard/cardDetails"
                        >
                                <input value={value.button}  type="submit" 
                                className={`${value.color === "blue"  ?  "bg-[#0092EC] " : "bg-yellow-500 "}  text-white px-4 py-2 cursor-pointer   
                               `} />
                        </Link>
                    </div>
                </div>
            ))}
            </form>
    )
}

export default SubcriptionPlans;