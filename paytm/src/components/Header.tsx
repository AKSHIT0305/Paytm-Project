import React from 'react'
import {img} from "../img/img"

const Header = () => {
  return (
    <>
    <div className='pl-4 flex justify-between border-y-2 border-gray-200 items-center'>
        <div>
            <img className='w-44' src={img.paytm_logo} alt="" />
        </div>
        <div>
            <ul className='flex align-center'>
                <li className='p-2 font-semibold '>Ticket Booking</li>
                <li className='p-2 font-semibold'>Recharge & Bills</li>
                <li className='p-2 font-semibold'>Payments & Services</li>
                <li className='p-2 font-semibold'>Paytm for Business</li>
                <li className='p-2 font-semibold'>Company</li>
            </ul>
        </div>
        <div className='rounded-full border border-gray-400 h- flex gap-2'>
            <input type="text" placeholder='' className='h-12 w-50 p-4 m-1 rounded-full bg-indigo-100' />
        </div>
    </div>
    </>
  )
}

export default Header