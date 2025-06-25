import React from 'react'

const Header = () => {
  return (
    <>
    <div className='pl-4 flex justify-between border-y-2 border-gray-200'>
        <div className='flex gap-2 items-center'>
            <img className='w-56' src="/src/img/paytm_logo.png" alt="" />
        </div>
        <div className=''>
            <ul className='flex '>
                <li className='p-4 font-bold'>Ticket Booking</li>
                <li className='p-4 font-bold'>Recharge & Bills</li>
                <li className='p-4 font-bold'>Payments & Services</li>
                <li className='p-4 font-bold'>Paytm for Business</li>
                <li className='p-4 font-bold'>Company</li>
            </ul>
        </div>
        <div className='rounded-full border border-gray-400 h-12 flex gap-2'>
            <input type="text" placeholder='' className='h-12 w-50 p-4 m-1 rounded-full bg-indigo-100' />
        </div>
    </div>
    </>
  )
}

export default Header