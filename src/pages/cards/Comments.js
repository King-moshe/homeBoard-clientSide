import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonOutline, IoSendSharp, IoTrashBinOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { apiPost } from '../../services/apiServices';
import { API_URL } from '../../constant/url';
import { useStateContext } from '../../context';
import './scroll.css'

export default function Comments({ setCommentResp }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('')

  const { client } = useStateContext();



  const saveComment = async () => {
    try {
      let resp = await apiPost(API_URL + '/users/' + client._id)
      console.log(resp);
      setCommentResp(resp)
      console.log();
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputText.trim(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');

      saveComment(newMessage.text);
    }
  };


  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleDeleteMessage = (messageId) => {
    if (window.confirm('למחוק את ההודעה? ')) {
      const updatedMessages = messages.filter((message) => message.id !== messageId);
      setMessages(updatedMessages);
    }



  };




  return (
    <div className='p-0 m-0'>
      <div className='font-medium text-neutral-300 p-[10px] flex justify-between bg-slate-700  rounded-t-lg'>
        <span>הודעות אחרונות</span>
        <button size="small" variant="contained" className='items-end' >
          <Link to='/projects/singleProject' className='hover:text-white p-1'>חזור </Link>
        </button>
      </div>
      <div className="flex flex-col h-[70vh]">
        <div className="flex flex-col flex-1 p-4  overflow-y-scroll  scrollbar-track-gray-200 bg-slate-600" >
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.id % 2 === 0 ? 'justify-end ' : 'justify-start'} mb-4`}>
              <IoIosContact className="m-2 text-2xl text-blue-300 " />
              <div className={` rounded-lg p-2 w-1/2 md:w-1/3 ${message.id % 2 === 0 ? 'custom-shadow text-white rounded-tl-none border-blue-400 border-1' : 'custom-shadow2  bg-blue-400 rounded-tr-none text-white'}`} >

                <span className="flex-grow">

                  {message.text}</span>

              </div>
              <button className="hover:text-red-500 mr-2 text-xl text-red-400" onClick={() => handleDeleteMessage(message.id)}><MdDeleteForever /></button>
            </div>
          ))}
        </div>
        <div className="p-4 bg-slate-600 rounded-b-lg shadow-inner">
          <div className="flex h-10">
            <button
              onClick={handleSendMessage}
              className="py-2 px-4 bg-blue-400 text-white rounded-lg rounded-l-none"
            >
              <IoSendSharp />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="כתוב כאן את ההודעה..."
              className="w-full py-2 px-3 text-white border-2 rounded-r-none border-blue-400 focus:outline-none bg-slate-600 focus:border-blue-300 rounded-lg custom-shadow "
            />

          </div>
        </div>
      </div>
 </div>
);
}
