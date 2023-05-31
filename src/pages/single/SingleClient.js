import React from 'react'
import { useStateContext } from '../../context';
import { Button, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function SingleClient() {

  const { client } = useStateContext();



  return (
    <div className="p-[20px] m-[20px]">
      <div className='font-medium text-neutral-300 mb-0.5 border-2 p-[10px] flex justify-between bg-slate-700'>
        <span className="pt-2 text-lg"><strong>שם הדייר :</strong> {client.name}</span>
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/projects/singleProject' className='hover:text-white p-1'>חזור לרשימת הדיירים < ArrowBackIcon /></Link>
        </Button>
      </div>
      <div className=" md:h-[400px] mh-[400px] border flex flex-wrap bg-slate-600  drop-shadow-xl text-white text-lg">
        <div className='md:w-[45%] w-full border-2 p-2 pt-3'>
          <h2 className='mb-3 mt-2 '><strong className='underline underline-offset-2'>שם הפרויקט</strong> : {client.p_name}</h2>
          <h2 className='mb-3'><strong className='underline underline-offset-2'>עיר </strong> : {client.city_name}</h2>
          <h2 className='mb-3'><strong className='underline underline-offset-2'>שם רחוב</strong> : {client.street_name}</h2>
          <h2 className='mb-3'><strong className='underline underline-offset-2'>שם / מספר בנין</strong> : {client.building_name}</h2>
          <h2 className='mb-3'><strong className='underline underline-offset-2'>קומה </strong> : {client.story}</h2>
          <h2 className='mb-3'><strong className='underline underline-offset-2'>דירה </strong> : {client.apartment}</h2>
          <h2 className='mb-3'><strong className='underline underline-offset-2'>צור קשר </strong>-</h2>
          <h2 className='mb-3'><strong className='underline underline-offset-2'> טלפון </strong> : {client.phone}</h2>
          <h2 className='mb-3'><strong className='underline underline-offset-2'> אימייל </strong> : {client.email}</h2>
        </div>
        <div className='md:w-[55%] w-full border-2 p-1'>
          <div className='md:h-1/3 h-[90px] border'>הוספת מסמכים</div>
          <div className='md:h-2/3 mh-[220px] border p-1'>הוספת הערות
            <textarea className='w-full text-black' />
          </div>
        </div>
      </div>
    </div>
  )
}
