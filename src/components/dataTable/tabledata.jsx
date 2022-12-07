import React from 'react'


function TableData() {
    return (
        <div>
            <table className='min-w-full text-center bg-white my-4'>
                <thead className="">
                    <tr>
                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                            Date
                        </th>
                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                            Payment details
                        </th>
                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                            Amount
                        </th>
                        <th scope="col" className="text-sm  font-[600] text-[#000000] px-6 py-4">
                            STATUS
                        </th>
                    </tr>
                </thead>
                {data.map((value, key) => {
                    return (
                        <tr key={key}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">{value.Date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">{value.Payment_details}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm  font-[400] text-[black]">{value.Amount}</td>
                            <td className={`${value.color === "green" ? "text-[#1BDF2F]" : "text-[#F95353]"} px-6 py-4 whitespace-nowrap text-sm  font-[400]`}>{value.Status}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default TableData;




const data = [
    { Date: "30 Nov 2022", Payment_details: 'Silver (annually)', Amount: "N20, 000", Status: 'Approved', color: 'green' },
    { Date: "30 Nov 2022", Payment_details: 'Silver (annually)', Amount: "N20, 000", Status: 'Declined', color: 'red' },
    { Date: "30 Nov 2022", Payment_details: 'Silver (annually)', Amount: "N20, 000", Status: 'Declined', color: 'red' },
    { Date: "30 Nov 2022", Payment_details: 'Silver (annually)', Amount: "N20, 000", Status: 'Declined', color: 'red' },
    { Date: "30 Nov 2022", Payment_details: 'Silver (annually)', Amount: "N20, 000", Status: 'Approved', color: 'green' }
  
]