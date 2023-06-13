import React, { useEffect, useState } from "react";
import Widget from "../../components/widget/Widget";
import { useStateContext } from "../../context";
import { API_URL } from "../../constant/url";
import { apiGet } from "../../services/apiServices";




export default function Home() {
  const { login } = useStateContext();
  const [data, setData] = useState([])

  useEffect(() => {
    doApi()
  }, [])

  const doApi = async () => {
    let url = API_URL + '/users/userInfo';
    try {
      const data = await apiGet(url)
      console.log(data);
      setData(data);

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div>
      {login === 2 && <>
        <div className="widgets block md:flex me-10 pt-4">
          <Widget type='projects' url='/projects/' text='פרוייקטים'/>
          <Widget type='users' url='/users/' text='דיירים'/>
          <Widget type='messages' url='/comments/' text='הודעות'/>
        </div>
      </>}
      {login === 3 &&
        <div className="p-[10px] m-[10px]">
          <div className='font-medium  mb-0.5 border-2  flex justify-between colors3  rounded-lg colors3 shadow-2xl h-[400px] p-4  m-3 text-lg text-white'>           
            <div className="w-1/4 md:w-2/12 h-full">
            <button className="w-full h-1/6 border mb-3 mt-4 rounded-lg bg-lime-700 hover:transition-colors">צ'אט</button>
            <button className="w-full h-1/6 border mb-3 rounded-lg bg-blue-900">מסמכים</button>
            <button className="w-full h-1/6 border mb-3 rounded-lg bg-sky-700">העלאת מסמכים</button>
            <button className="w-full h-1/6 border mb-3 rounded-lg bg-yellow-500">סטטוס פרויקט</button>
            
            </div>
           
          </div>
        </div>
      }
    </div>
  )
}