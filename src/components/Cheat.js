import React, { useEffect, useState } from 'react'
import './cheat.css'
import { API_URL } from '../constant/url';
import { apiGet } from '../services/apiServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function Cheat() {

    const [data, setData] = useState([])

    useEffect(() => {
        doApi();
    }, [])


    const doApi = async () => {
        let url = API_URL + '/users/usersList'
        try {
            let data = await apiGet(url);
            console.log(data);
            setData(data);

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='mr-[20px] p-[10px] justify-between h-[80vh] w-full md:w-2/5  mb-4 bg-stone-800 text-white cheat overflow-scroll'>
          <h1 className='w-full p-1 pe-2 text-2xl'>צ'אטים</h1>
            <div className=' w-full h-full block '>
                {data.map((user)=>(
                    <button key={user._id} className=' w-full h-[52px] text-right pe-3 mb-1 border-t-slate-50'><AccountCircleIcon className='ms-1 item'/> {user.name} - {user.p_name}</button>
                ))}
            </div>
        </div>
    )
}
