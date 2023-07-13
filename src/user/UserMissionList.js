import React, { useEffect, useState } from 'react';
import { API_URL } from '../constant/url';
import { apiGet } from '../services/apiServices';

export default function UserMissionList() {
    const [missions, setMissions] = useState([]);
    const [data, setData] = useState([]);



    useEffect(() => {
        doApi();
    }, []);


    const doApi = async () => {
        let url = API_URL + '/users/userInfo';
        try {
            const data = await apiGet(url);
            setData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };




    return (
        <div className='text-white'>
            <h1>User Mission List</h1>
            <ul>
                {missions.map((mission) => (
                    <li key={mission.id}>{mission.title}</li>
                ))}
            </ul>
        </div>
    );
}
