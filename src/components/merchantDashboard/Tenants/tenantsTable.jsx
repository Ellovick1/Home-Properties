import React, { useState } from 'react'
import { TbFilter } from 'react-icons/tb';


function RequestTable() {

    const [showTable, setShowTable] = useState(true)
    const [showModal, setShowModal] = useState("hide");

    const showFilter = () => {
        if (showModal === "show") {
            setShowModal("hide");
        }
        if (showModal === "hide") {
            setShowModal("show");
        }
    };

    return (
        <div>
            <div className='py-4 flex px-8 items-center justify-between bg-[#FCFCFC]'>
                <h3 className='font-[400] font-[DM Sans] text-[#000000]'>All Tenants</h3>
                <div>
                    <div className="relative max-w-3xl mx-auto px-8  flex items-center justify-end  mt-2 border-[#A7A7A7] border-[1px] rounded-lg">
                        <p onClick={showFilter} className="cursor-pointer text-sm text-[#A7A7A7] py-4 bg-transparent">All Property</p>
                        {/* <TbFilter
                            onClick={showFilter}
                            data-dropdown-toggle="dropdown"
                            type="button"
                            className="cursor-pointer" /> */}
                            
                        <div
                            className={`${showModal === "hide"
                                ? "hidden"
                                : "z-10 absolute bg-[#fff] text-[#000] rounded-md top-[100%] right-0"
                                } `}
                                data-popper-reference-hidden=""
                                data-popper-escaped=""
                                data-popper-placement="top"
                        >
                            <ul
                                className=" text-sm shadow-md px-5 py-2 rounded-md cursor-pointer w-[9rem]"
                                aria-labelledby="dropdownDefault"
                                style={{ display: "flex", flexDirection: "column", alignItems: 'center', gap: '10px' }}>
                                <li className=" text-[#0092EC]">All</li>
                                <li>Unpaid</li>
                                <li>rejected</li>
                                <li>Completed</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col  p-[1.5rem] bg-white">
                <div className="overflow-x-auto sm:-mx-6">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-4">
                        <div className="overflow-hidden">

                            <table className="min-w-full text-center">
                                <thead className="">
                                    <tr>
                                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                                            NAME
                                        </th>
                                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                                            EMAIL
                                        </th>
                                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                                            PHONE NUMBER
                                        </th>
                                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                                            RENT AMOUNT
                                        </th>
                                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                                            DATE DUE
                                        </th>
                                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                                            STATUS
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">Grace</td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        Floyd Miles
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        tranthuy.nute@gmail.com
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        NGN 12,000
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p classNameName='p-[0.3rem]  text-[#219653] text-center'>Cleared</p>
                                        </td>
                                       
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">Grace</td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        Floyd Miles
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        tranthuy.nute@gmail.com
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        NGN 12,000
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p classNameName='p-[0.3rem]  text-[#EB5757] text-center'>Unpaid</p>
                                        </td>
                                       
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">Grace</td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        Floyd Miles
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        tranthuy.nute@gmail.com
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        NGN 12,000
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p classNameName='p-[0.3rem]  text-[#EB5757] text-center'>Unpaid</p>
                                        </td>
                                       
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">Grace</td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        Floyd Miles
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        tranthuy.nute@gmail.com
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        NGN 12,000
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p classNameName='p-[0.3rem]  text-[#EB5757] text-center'>Unpaid</p>
                                        </td>
                                       
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">Grace</td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        Floyd Miles
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        tranthuy.nute@gmail.com
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        NGN 12,000
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p classNameName='p-[0.3rem]  text-[#EB5757] text-center'>Unpaid</p>
                                        </td>
                                       
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">Grace</td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        Floyd Miles
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        tranthuy.nute@gmail.com
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            09045826345
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                        NGN 12,000
                                        </td>
                                        <td className="text-sm text-[black] font-[400] px-6 py-4 whitespace-nowrap">
                                            <p classNameName='p-[0.3rem]  text-[#219653] text-center'>Cleared</p>
                                        </td>
                                       
                                    </tr>
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestTable