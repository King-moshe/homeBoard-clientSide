import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from './appBar'
import Main from './Main'
import Contact from './Contact'
import Footer from './Footer'
import OurWork from './OurWork'


export default function Landing() {
    return (
        <>
            <AppBar />
            <div className='home text-white' id='home'>
                <div className='max-w-[800px]  w-full h-screen mt-[-96px] mx-auto text-center flex flex-col justify-center'>
                    <p className='text-[#00bf9a] font-bold mt-4 md:text-xl sm:text-lg text-sm'>מערכת לניהול פרוייקטים בקלות</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>  E.P.N ברוכים הבאים ל </h1>
                    <p className='text-[#00bf9a] w-1/2 mx-auto'>Easy Project Management</p>
                    <div>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Dreem, Design, Enjoy</p>
                        {/* <p strings={['Easy', 'Experienced', 'Fast'] } typeSpeed={120} backSpeed={140} loop/> */}
                        <p className='md:text-2xl text-xl font-bold text-gray-500 md:pl-4 mb-4 '>תנו לנו לעשות את כל העבודה הקשה בשבילכם</p>
                        <p className='md:text-2xl text-xl font-bold mb-4'>מערכות M&Y ע"י חברת</p>
                        <Link to='/login' className='bg-[#00bf9a]  text-black font-bold p-2 mx-auto rounded-md '>כניסה</Link>
                    </div>
                    <div className='hidden 2xl:block h-20'></div>
                </div>
            </div>
            <Main />
            <OurWork />
            <Contact />
            <Footer />
        </>
    )
}
