import React, { useEffect, useState } from 'react';
import { API_URL } from '../constant/url';
import { apiGet, apiPut } from '../services/apiServices';
import { Modal } from "antd";
import Files from '../pages/single/files';
import { IoIosCloseCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import UserFilesList from './UserFilesList';
import { useStateContext } from '../context';
import Comments from '../pages/cards/Comments';

export default function HomeUser() {
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [fileResp, setFileResp] = useState('');
    const [openFilesModal, setOpenFilesModal] = useState(false);
    const [openModalComment, setOpenModalComment] = useState("")
    const [myId, setMyId] = useState('');
    const nav = useNavigate();
    const { setUserFile } = useStateContext()

    const updateClient = async () => {
        try {
            const newClient = { ...data };
            newClient.files.push(fileResp);
            delete newClient._id;
            delete newClient.role;
            delete newClient.date_created;
            delete newClient.__v;
            delete newClient.comments;
            console.log(newClient);
            await uploadFile(newClient, myId);
            setOpenModal(false)
        } catch (error) {
            console.error('Error updating client:', error);
        }
    };

    useEffect(() => {
        doApi();
    }, []);

    useEffect(() => {
        if (!data.name) {
            nav('/');
        }
        setMyId(data._id);
        if (fileResp.length > 0) {
            updateClient();
        }
        setUserFile(data);
    }, [data, fileResp]);



    const doApi = async () => {
        let url = API_URL + '/users/userInfo';
        try {
            const response = await apiGet(url);
            setData(response);
        } catch (error) {
            console.log(error);
        }
    };

    const uploadFile = async (newClient, id) => {
        try {
            console.log(API_URL + '/users/' + id);
            const response = await apiPut(API_URL + '/users/' + id, newClient);
            console.log(response);
        } catch (error) {
            console.error('Error uploading file:', error);
        }

    };


    return (
        <>
            <div className='mission  md:flex block  justify-between h-[66vh] overflow-y-auto md:overflow-hidden w-full mb-4 bg-stone-800 text-white rounded-lg'>
                <div className="w-1/4 md:w-2/12 h-full">
                    <button className="w-full h-1/6 border mb-3 mt-4 rounded-lg bg-lime-700 hover:transition-colors" onClick={() => setOpenModalComment(true)}>צ'אט</button>
                    <button className="w-full h-1/6 border mb-3 rounded-lg bg-blue-900" onClick={() => setOpenFilesModal(true)}>מסמכים</button>
                    <button className="w-full h-1/6 border mb-3 rounded-lg bg-sky-700" onClick={() => setOpenModal(true)}>העלאת מסמכים</button>
                    <button className="w-full h-1/6 border mb-3 rounded-lg bg-yellow-500">סטטוס פרויקט</button>
                </div>
            </div>

            {/* Upload file */}
            <Modal
                style={{ paddingLeft: '0px' }}
                centered
                open={openModal}
                closeIcon={<IoIosCloseCircle className='text-white text-2xl  absolute ml-24 mt-6' />}
                onCancel={() => setOpenModal(false)}
                width={900}
                footer={null}
            >
                <Files setFileResp={setFileResp} />
            </Modal>

            {/* Show files list */}
            <Modal
                style={{ paddingLeft: '0px' }}
                closable={true}
                closeIcon={<IoIosCloseCircle className='text-white text-3xl mt-2.5 absolute ml-20' />}
                centered
                open={openFilesModal}
                onCancel={() => setOpenFilesModal(false)}
                width={1000}
                height={650}
                footer={null}
            >
                <UserFilesList />
            </Modal>
            <Modal
                closable={true}
                closeIcon={<IoIosCloseCircle className='text-white text-2xl mt-0.5 absolute ml-12' />}
                centered
                open={openModalComment}
                onCancel={() => setOpenModalComment(false)}
                width={600}
                footer={null}
            ><Comments />
            </Modal>
        </>
    );
}
