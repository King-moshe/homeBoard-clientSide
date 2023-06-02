import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { useStateContext } from '../../context';

export default function UserInfo() {
    const { user } = useStateContext();


    return (
        <div className='border-2 rounded-lg bg-slate-600 shadow-2xl h-full p-4  m-3 text-lg text-white'>
            <h1 className='w-full mb-1 mt-1 p-1'><strong><BadgeOutlinedIcon /> פרטי משתמש : {user.name}</strong></h1>
            <div className='border-2 rounded-xl p-6 ps-8 pe-8 flex flex-wrap'>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'>שם מלא : {user.name}</div>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'><ApartmentIcon />הפרויקט שלי : {user.p_name}</div>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'>מספר בנין : {user.building_name}</div>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'>קומה : {user.story}</div>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'>דירה : {user.apartment}</div>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'>אימייל : {user.email}</div>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'>טלפון : {user.phone}</div>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'> <AdminPanelSettingsOutlinedIcon />הרשאת גישה : {user.role}</div>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'> מסמכים : {user.files.value}</div>
                <div className='w-1/2 p-2 ps-2  mb-4 shadow-xl'>התווסף בתאריך : {user.date_created}</div>
            </div>
        </div>
    )

}
