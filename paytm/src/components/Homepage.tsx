import React from 'react'
import Header from './Header'
import { img } from "../img/img"

const Homepage = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className=' bg-blue-100'>
                <div className='flex justify-between'>
                    <div className='pl-15'>
                        <ul className='flex items-center'>
                            <li className='p-6 flex pr-7 whitespace-nowrap '><img className='s-7 h-7' src={img.plane} alt="" />Flights</li>
                            <li className='p-6 flex pr-7 whitespace-nowrap'><img className='s-6 h-6' src={img.bus} alt="" />Bus</li>
                            <li className='p-6 flex pr-7 whitespace-nowrap'><img className='s-6 h-6' src={img.train} alt="" />Trains</li>
                            <li className='p-6 flex pr-7 whitespace-nowrap'><img className='s-7 h-7' src={img.intl_plane} alt="" />Intl. Flights</li>
                        </ul>
                    </div>
                    <div>
                        <img className='w-52 p-5' src={img.paytm_travel_logo} alt="" />
                    </div>
                </div>
                <div className='box-border bg-white h-50 rounded-lg border-gray-300 m-10 border-1'>
                    <div>
                        <ul className='flex p-6 items-center'>
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "></input>
                            <li className='pl-2 pr-8'>One Way</li>
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <li className='pl-2'>Round Trip</li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-90 m-4 h-30' src={img.fly_summer} alt="" />
                    <img className='w-90 m-4 h-30' src={img.travel_pass} alt="" />
                </div>
            </div>
            
        </>
    )
}

export default Homepage