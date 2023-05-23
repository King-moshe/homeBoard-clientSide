import React from 'react'
import green from './images/green.jpg'
import { Link } from 'react-router-dom'


export default function Main() {
    return (
        <>         
            <div className='w-full px-8 my-3 ' id='about'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <img className='md:w-[500px] h-[87%] mx-auto my-4 shadow-md shadow-black md:rounded-l-2xl rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl' src={green} alt='back' />
                    <div className='flex flex-col justify-center  md:ml-5 shadow-inner p-4 md:rounded-r-2xl rounded-b-2xl md:rounded-b-none md:rounded-br-2xl h-[87%] mt-[24px] '>
                        <p className='text-[#00bf9a] font-bold'>כדי לסמוך על מישהו, צריך להכיר אותו</p>
                        <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2 text-slate-400'>קצת עלינו</h1>
                        <p className='text-slate-400'>לקחנו על עצמנו להנגיש ולהקל את כל חווית עיצוב ושיפוץ הבית או כל שינוי שתרצו לעשות בביתכם על ידי בניית ממשק חדשני ומשוכלל המקל על כל התהליך ומשנה משמעותית לטובה את כל שיפוץ הדירה, ומסיר את כל הסבל הבירוקרטי שהיה כרוך עד היום</p>
                        <Link to='/login' className='text-[#00bf9a] border-1 border-[#00bf9a] bg-black font-bold p-2 mx--0 md:mx-0 my-6 w-[100px] text-center rounded-md '>כניסה</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
