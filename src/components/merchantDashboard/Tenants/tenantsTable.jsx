import React, { useState } from 'react'
import { TbFilter } from 'react-icons/tb';
import Avatar from '../../../assets/Dashboard-Imags/avatar.svg'


function RequestTable() {

    const [showTable, setShowTable] = useState(true)
    const [showModal, setShowModal] = useState("hide");
    const [sideIcon, setSideIcon] = useState("hide");

    const showFilter = () => {
        if (showModal === "show") {
            setShowModal("hide");
        }
        if (showModal === "hide") {
            setShowModal("show");
        }
    };

    const showIcon = () => {
        if (sideIcon === "show") {
            setSideIcon("hide");
        }
        if (sideIcon === "hide") {
            setSideIcon("show");
        }
    };

    return (
        <div>
            <div className='py-4 flex px-8 items-center justify-between bg-[#FCFCFC]'>
                <h3 className='font-semibold font-[DM Sans] text-[#000000]'>All Tenants</h3>
                <div>
                    <div className="relative max-w-3xl mx-auto px-8  flex items-center justify-end  mt-2 border-[#A7A7A7] border-[1px] rounded-lg">
                        <p onClick={showFilter} className="cursor-pointer text-sm text-[#A7A7A7] py-4 bg-transparent">All Property</p>

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
                                <li className=" text-[#0092EC]">All Property</li>
                                <li>Apartments</li>
                                <li>Offices</li>
                                <li>Stalls</li>
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
                                {data.map((value, key) => {
                                    return (
                                        <tr key={key}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black] flex place-items-center gap-4"><img src={value.img} /> {value.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">{value.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">{value.phone_number}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">{value.rent_amount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">{value.date_due}</td>
                                            <td className={`${value.color === "green" ? "text-[#219653]" : "text-[#EB5757]"} px-6 py-4 whitespace-nowrap text-sm  font-[400]`}>{value.Status}</td>
                                            {/* <td className='cursor-pointer'>
                                                ...
                                            </td> */}
                                        </tr>
                                    )
                                })}

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestTable

const data = [
    { name: ' Floyd Miles', img: Avatar, date_due: "30 Nov 2022", email: ' tranthuy.nute@gmail.com', phone_number: ' 09045826345', rent_amount: "N20, 000", Status: 'Unpaid', color: 'red', id: 1 },
    { name: ' Floyd Miles',  img: Avatar, date_due: "30 Nov 2022", email: ' tranthuy.nute@gmail.com', phone_number: ' 09045826345', rent_amount: "N20, 000", Status: 'Cleared', color: 'green', id: 2 },
    { name: ' Floyd Miles',  img: Avatar, date_due: "30 Nov 2022", email: ' tranthuy.nute@gmail.com', phone_number: ' 09045826345', rent_amount: "N20, 000", Status: 'Unpaid', color: 'red', id: 3 },
    { name: ' Floyd Miles',  img: Avatar, date_due: "30 Nov 2022", email: ' tranthuy.nute@gmail.com', phone_number: ' 09045826345', rent_amount: "N20, 000", Status: 'Unpaid', color: 'red', id: 4 },
    { name: ' Floyd Miles',  img: Avatar, date_due: "30 Nov 2022", email: ' tranthuy.nute@gmail.com', phone_number: ' 09045826345', rent_amount: "N20, 000", Status: 'Cleared', color: 'green', id: 5 },
    { name: ' Floyd Miles',  img: Avatar, date_due: "30 Nov 2022", email: ' tranthuy.nute@gmail.com', phone_number: ' 09045826345', rent_amount: "N20, 000", Status: 'Unpaid', color: 'red', id: 6 },

]


