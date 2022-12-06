import React from 'react'
import SendMail from '../../modals/SendMail'

export default function Messages() {

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
            
            <input className='border py-2 px-5 w-96' type="text" name="" placeholder="Tenants name"  /><br /><br />
            <input className='border py-2 px-5 w-96' type="email" name="" placeholder="Email address"  /><br /><br />
            <input className='border py-2 px-5 w-96' type="text" name="" placeholder="Property Address"  /><br /><br />
            <input className='border py-2 px-5 w-96' type="text" name="" placeholder="Expiry Date" /><br /><br />
           
            <textarea className='border w-96 px-5 py-3 mt-2 resize-none' rows="4" cols="50" placeholder='Type your message...' name="message" />

            <div className='flex justify-center mt-3 relative'>
                    <SendMail type="submit" value="Send" className='bg-[#0092EC] hover:bg-sky-300  px-[4rem] py-2 text-white w-[100%]' />
            </div>
          </form>
        </div>
    </div>
  )
}
