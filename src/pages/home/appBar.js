import React, { useState } from 'react'
import './homePage.css'
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import Header from './Landing';
import { Button } from '@mui/material';
import Footer from './Footer';



export default function AppBar() {
  const [nav, setNav] = useState(false)
  const hendleNav = () => {
    setNav(!nav)
  }

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 75) {
      setColor(true)
    } else {
      setColor(false)
    }

  }


  window.addEventListener('scroll', changeColor)


  return (
    <>
      <div className={color ? ' sticky top-0 z-10 bg-slate-900 bg-opacity-90 ease-in-out duration-1000' : ''}>
        <div className='bar flex justify-between items-center px-4 mx-auto text-white h-24 '>
          <Button className='text-center'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-OhVu04vi5MILVrHMKjFHz68ULPUqfuE-g&usqp=CAU' alt='logo' className='md:w-12 w-10 mt-2 md:mt-0 rounded-full' />
          </Button>
          <ul className='hidden md:flex text-slate-400'>
            <li className='p-4'><button ><a className=' hover:text-[#00bf9a] ' href='#home'>בית</a></button></li>
            <li className='p-4'><button><a className=' hover:text-[#00bf9a] ' href='#about'>עלינו</a></button></li>
            <li className='p-4'><button><a className=' hover:text-[#00bf9a] ' href='#our'>עבודות שלנו</a></button></li>
            <li className='p-4'><button><a className=' hover:text-[#00bf9a] ' href='#contact'>צור קשר</a></button></li>
            <li className='p-4'><Link to='/login' className='bg-[#00bf9a]  text-black font-bold mx-auto rounded-md h-3 p-2'>כניסה</Link></li>

          </ul>
          <div onClick={hendleNav} className='block md:hidden'>
            {nav ? <VscChromeClose size={30} /> : <VscThreeBars size={30} />}
          </div>
          <div className={nav ? ' fixed right-0 top-0 h-full w-[50%] border-r border-r-gray-900 bg-gray-900  bg-opacity-95 ease-in-out duration-1000 ' : 'fixed right-[-100%] ease-out duration-500'}>
            <div className=' mt-4 mr-5'>
              <Button>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-OhVu04vi5MILVrHMKjFHz68ULPUqfuE-g&usqp=CAU' alt='logo' className='w-10 rounded-full' />
              </Button>
            </div>
            <ul className='mt-4 p-4 uppercase text-gray-600 text-center '>
              <li className='p-2  mb-4 border-gray-500 border-x-2 bg-gray-900  rounded-md'> <a className=' hover:text-[#00bf9a] ' href='home'  >בית</a></li>
              <li className='p-2  mb-4 border-gray-500 border-x-2 bg-gray-900  rounded-md '> <a className=' hover:text-[#00bf9a] ' href='#about'>עלינו</a></li>
              <li className='p-2  mb-4 border-gray-500  border-x-2 bg-gray-900  rounded-md'> <a className=' hover:text-[#00bf9a] ' href='#our'>עבודות שלנו</a></li>
              <li className='p-2  mb-4 border-gray-500  border-x-2 bg-gray-900 text-sm  rounded-md'> <a className=' hover:text-[#00bf9a] ' href='#contact'>צרו קשר</a></li>
              <li className='p-2 border-gray-500  border-x-2 bg-gray-900  rounded-md'> <Link className='bg-[#00bf9a]  text-black font-bold mx-auto rounded-md h-3 p-2' to='/login'>כניסה</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
