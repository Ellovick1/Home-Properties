import React from 'react'
import Tabledatas from '../../../components/dataTable/tabledata'

const SubscriptionDetails = () => {
    return (
        <div className='p-6'>
            <div className='flex justify-between'>
                <h3 className='font-medium text-black text-[15px]'>Subscription details</h3>
                <h3 className='text-[#0092EC] font-medium cursor-pointer'>Change plan</h3>
            </div>

            <div className='bg-white p-4 flex justify-between place-items-end my-4'>
                <div>
                    <p className='font-medium text-[#4C4C4C] text-[12px] pb-2'>Current plan</p>
                    <h4 className='font-semibold text-black text-[15px]'>Silver (annually)</h4>
                </div>

                <div className='flex gap-10 place-items-end'>
                    <p className='font-semibold text-black text-[15px]'>N2000</p>
                    <div>
                    <p className='font-medium text-[#4C4C4C] text-[12px] pb-2'>Current balance</p>
                    <h4 className='font-semibold text-black text-[15px]'>30 Used</h4>
                    </div>
                </div>

                <div>
                    <h4 className='font-semibold text-black text-[15px]'>20 remaining</h4>
                </div>
            </div>


            <div className='bg-white p-4 flex justify-between place-items-end '>
                <div>
                    <p className='font-medium text-[#4C4C4C] text-[12px] pb-2'>Next subscription date</p>
                    <h4 className='font-semibold text-black text-[15px] text-center'>Jul 8, 2022</h4>
                </div>

                    <div>
                    <p className='font-medium text-[#4C4C4C] text-[12px] pb-2'>Subscription amount</p>
                    <h4 className='font-semibold text-black text-[15px] text-center'>N2000</h4>
                    </div>

                <div>
                <p className='font-medium text-[#4C4C4C] text-[12px] pb-2'>Number of contacts</p>
                    <h4 className='font-semibold text-black text-[15px]'>1-50</h4>
                </div>
            </div>


            <Tabledatas />


        </div>
    )
}

export default SubscriptionDetails