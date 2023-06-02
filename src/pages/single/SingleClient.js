import React, { useState, useEffect } from 'react'
import { useStateContext } from '../../context';
import { Modal } from "antd";
import Files from "./files"

import { Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { apiPut } from '../../services/apiServices';
import { API_URL } from '../../constant/url';
import { Link } from 'react-router-dom';


export default function SingleClient() {

  const [openModal, setOpenModal] = useState("")
  const [fileResp, setFileResp] = useState("")

  const { client } = useStateContext();



  const updateClient = () => {
    client.files.push(fileResp)
    const myId = client._id
    const newClient = client
    delete newClient._id
    delete newClient.role
    delete newClient.date_created
    delete newClient.__v
    uploadFile(newClient, myId)
  }

  const uploadFile = async (newClient, id) => {
    console.log(API_URL + '/users/' + id);
    const data = await apiPut(API_URL + '/users/' + id, newClient)

    console.log(data);
  }

  useEffect(() => {
    console.log(client);
    fileResp.length > 0 && updateClient()
  }, [fileResp])


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
          <div className='md:h-1/3 h-[90px] border'><Button onClick={() => { setOpenModal(true) }}>hjnvchjfgc</Button></div>
          <Modal
            centered
            open={openModal}
            onCancel={() => setOpenModal(false)}
            width={2000}
            footer={null}
          ><Files setFileResp={setFileResp} />
          </Modal>
          <div className='md:h-2/3 mh-[220px] border p-1'>הוספת הערות
            <textarea className='w-full text-black' />
          </div>
        </div>
      </div>
    </div>
  )
}
