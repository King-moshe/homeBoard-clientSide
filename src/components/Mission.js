import React from 'react'
import './cheat.css'

export default function Mission() {
  return (
    <div className='mission mr-[20px] md:flex block pt-[10px] justify-between  h-[66vh] w-full md:w-2/3 mb-4 bg-stone-800 text-white rounded-lg'>
      <div className='md:w-1/2 w-full md:border-l block'>
        <div className='w-1/3 h-full pt-2 justify-center items-center p-2'>
          <button className='w-full bg-red-600 rounded-lg p-1 ml-3 mb-3'>הוסף משתמש</button>     
          <button className='w-full bg-lime-400 rounded-lg p-1 ml-3 mb-3'>הוסף פרויקט</button>     
          <button className='w-full bg-orange-400 rounded-lg p-1 mb-3'>הוסף פרויקט</button>     
        </div>
        {/* <img src='https://images.pexels.com/photos/8962479/pexels-photo-8962479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='mission' className='h-[56vh] w-full p-2  rounded-3xl'/> */}
      </div>
      <div className='md:w-1/2 w-full '>
        <h2 className='w-full pr-3'>התפלגות נתונים באתר</h2>
        <img src='https://assets.goodfirms.co/blog/general/1573636351-when-to-use-diagram-software.jpg' alt='mission' className='h-[59vh] w-full p-2  rounded-3xl ' />
      </div>
    </div>
  )
}
