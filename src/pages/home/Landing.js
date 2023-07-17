import React from 'react'
import AppBar from './appBar'
import Main from './Main'
import Contact from './Contact'
import Footer from './Footer'
import OurWork from './OurWork'

export default function Landing() {
    return (
        <div>
            <AppBar />
            <div className='home text-black' id='home'>
                <div className='max-w-[800px] w-full h-screen mt-[-96px] mx-auto  flex flex-col justify-center '>
                    <div className=' text-center  rounded-2xl bg-gray-100 bg-opacity-25 m-3 md:m-0'>
                        <p className=' md:pl-4 mb-2 mt-4 md:text-5xl sm:text-4xl text-xl font-bold text-yellow-600'><strong>HomeBoard</strong></p>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-yellow-700'>עיצוב פנים | תכנון אדריכלי | שינויי דיירים</p>
                    </div>
                    <div className='hidden 2xl:block h-20'></div>
                </div>
            </div>
            <Main />
            <OurWork />
            <Contact />
            <Footer />
        </div>
    )
}
