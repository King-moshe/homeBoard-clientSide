import React, { useEffect, useState } from 'react'
import { API_URL } from '../../constant/url'
import { apiGet } from '../../services/apiServices';
import { useStateContext } from '../../context';

export default function FilesList() {
    const { client } = useStateContext();
    const [data, setData] = useState([]);
    const ID = client._id;
    console.log(ID);
    


    useEffect(() => {
        doApi();
    },[])


    const doApi = async () => {
        let url = API_URL + '/users/userFiles/' + ID;
        try {
            let data = await apiGet(url);
            console.log(data);
            setData(data);

        } catch (error) {
            console.log(error);

        }
    }


    return (
        <div className='h-[90vh] bg-slate-600 overflow-y-scroll '>
            <div className=' flex justify-between'>

                All files list - this user
            </div>
        </div>
    )
}
