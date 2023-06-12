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
          <Widget type='users' url='/users/' text='משתמשים' />
          <Widget type='projects' url='/projects/' text='פרוייקטים' />
          <Widget type='comments' url='/comments/' text='תגובות' />
        </div>
      </>}
      {login === 3 &&
        <div className="p-[20px] m-[20px]">
          <div className='font-medium text-neutral-300 mb-0.5 border-2 p-[10px] flex justify-between login3'>
            <h2>pannel of all the user and his project</h2>
           
          </div>
        </div>
      }
    </div>
  )
}