// import React from 'react'
import SendMail from '../../modals/SendMail'
import React, { useState } from 'react';

export default function Messages() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const areAllFieldsFilled = (name != "") && (email != "") && (address != "") && (message != "") && (expiryDate != "");

    const handleSubmit =  e => {
        e.preventDefault();
        
          }
      
          
  return (
    <div className='lg:flex justify-around pt-8'>
        <div className='pt-8'>
                <h4 className='font-bold '>Property Memo</h4>
                <p className='max- max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quas ipsum commodi aliquid debitis sint cumque.
                     Dignissimos dolorem corrupti delectus minus quisquam, 
                     cupiditate distinctio deserunt repellendus laboriosam</p>
        </div>

        <div className='bg-white'>
        <form onSubmit={handleSubmit} className='py-8 md:p-8 text-center'>
            
            <input className='border py-2 px-5 w-96' type="text" name="" placeholder="Tenants name"  value={name} onChange={ e => setName(e.target.value)} /><br /><br />
            <input className='border py-2 px-5 w-96' type="email" name="" placeholder="Email address" value={email} onChange={ e => setEmail(e.target.value)}  /><br /><br />
            <input className='border py-2 px-5 w-96' type="text" name="" placeholder="Property Address" value={address} onChange={ e => setAddress(e.target.value)}  /><br /><br />
            <input className='border py-2 px-5 w-96' type="text" name="" placeholder="Expiry Date"  value={expiryDate} onChange={ e => setExpiryDate(e.target.value)}/><br /><br />
           
            <textarea className='border w-96 px-5 py-3 mt-2 resize-none' rows="4" cols="50" value={message} onChange={ e => setMessage(e.target.value)} placeholder='Type your message...' name="message" />

            <div className='flex justify-center mt-3 relative'>
                    <SendMail type="submit" value="Send"
                            disabled={!areAllFieldsFilled   ? true : false}
                          className={`${ !areAllFieldsFilled ? 'cursor-not-allowed bg-[skyblue]' : 'cursor-pointer bg-[#0092EC]'} px-[4rem] py-2 text-white w-[100%]`} />
            </div>
          </form>
        </div>
    </div>
  )
}
