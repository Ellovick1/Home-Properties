import React from 'react'
import SubscriptionPlans from './SubscriptionPlans'
import SubscriptionDatas from './SubscriptionDatas'

const Home = () => {
  return (
    <div>
       <div className='text-center text-[20px] py-8'>
                <h3 className='font-bold'>Subscription Plans</h3>
                <p className='font-medium text-[#4C4C4C] text-[15px]'>A transparent plan</p>
       </div>
        <SubscriptionPlans details={SubscriptionDatas} />
    </div>
  )
} 

export default Home