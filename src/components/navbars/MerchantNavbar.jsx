import React from 'react'

const Navbar  = (props) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const date = new Date()
  let d = date.getDate()
  let year = date.getFullYear()
  let day = days[date.getDay()]
  let month = months[date.getMonth()]
  return (
    <div className='relative py-8 w-full bg-[red]'>
        {/* <h1 className='font-semibold mb-2 text-lg md:text-xl text-gray-700'>{ props.title }</h1>
        <p>{`${day} ${month} ${d}, ${year}`}</p>
        <div className='absolute right-4'>
            <div className='flex'>
                <img className='mr-4 w-5 h-5 md:w-7 md:h-7 hover:cursor-pointer' src='/images/Vector.png' />
                <img className='mr-4 w-5 h-5 md:w-7 md:h-7 hover:cursor-pointer' src='/images/image 9.png' />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div> 
        </div> */}
        <div className="">
            <div className="left"></div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Navbar
