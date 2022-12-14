import React from 'react'
import SuccessMessage from '../../../components/modals/SuccessMessage'
import Check_right from '../../../assets/check-circle.svg'
import MasterCardLogo from '../../../assets/mastercard_logo.svg'
import EditIcon from '../../../assets/edit-3.svg'

const CardInformation = () => {

  const handleSubmit =  e => {
    e.preventDefault();
    
  
      }

  return (
    <div className='p-8'>

      <form  onSubmit={handleSubmit}  className='bg-white p-5'>
        <div>
          <div className='flex  justify-between place-items-center'>
            <div className='pb-4'>
              <h4 className='font-medium text-[#4C4C4C] text-[15px]'>Card number</h4>
              <p className='font-normal text-[#4C4C4C] text-[12px]'>Enter the 16 digits number on your card</p>
            </div>
            <div className='cursor-pointer flex gap-1'>
            <p className='text-[#0092EC] text-[20px] font-medium '>Edit </p>
            <img src={EditIcon} alt=""  className='' />
            </div>
          </div>
          <div className='relative px-2'>
            <input type="number" name="password" id="password" placeholder="" className="bg-[#f9f9f9] pl-[4rem] py-3 border  w-[85%] focus:outline-none"  />
            <img src={MasterCardLogo} alt="" className='absolute top-0 left-4 w-[3rem]'/>
            <img src={Check_right} alt=""  className='absolute top-[0.7rem] right-[18%]' />
          </div>
        </div>

        <div className='lg:flex  justify-between place-items-center py-6  w-[85%]'>
          <div className='pr-4'>
            <h4 className='font-medium text-[#4C4C4C] text-[15px]'>CVV number</h4>
            <p className='font-normal text-[#4C4C4C] text-[12px]  mb-4'>Enter the 3 digits number on your card</p>
            <input type="number" name="password" id="password" placeholder="CVV" className="bg-[#f9f9f9] py-3  px-3 border focus:outline-none"  />
          </div>

          <div>
            <h4 className='font-medium text-[#4C4C4C] text-[15px] mt-4'>Expiry date</h4>
            <p className='font-normal text-[#4C4C4C] text-[12px] mb-4'>Enter the expiry date for your card</p>
            <div className='flex gap-8'>
              <div class="mb-3">
                <select class="form-select block w-36 px-3  py-3  text-base font-normal text-gray-700 bg-[#f9f9f9]  bg-clip-padding bg-no-repeat border border-solid border-gray-300
                               transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Month">
                  <option selected hidden>Month</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <select class="form-select block w-36 px-3  py-3  text-base font-normal text-gray-700 bg-[#f9f9f9]  bg-clip-padding bg-no-repeat border border-solid border-gray-300
                               transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Year">
                  <option selected hidden>Year</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className='border w-[85%] p-2'>
          <h4 className='font-semibold text-[#4C4C4C] text-[15px]'>Silver Plan (annually)</h4>
          <p className='font-medium text-black text-[12px]'>N20, 000</p>
          <p className='font-normal text-[#4C4C4C] text-[12px] '>1-50 contacts</p>
        </div>
      
          <div className='flex mt-3 relative'>
                    <SuccessMessage type="submit" value="Send" className='bg-[#0092EC] hover:bg-[blue]  px-[4rem] py-2 text-white w-[100%]' />
            </div>

      </form>

    </div>
  )
}

export default CardInformation