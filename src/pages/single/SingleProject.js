import React, { useEffect, useState } from "react"
import { useStateContext } from "../../context";
import { API_URL } from "../../constant/url";
import { apiGet } from "../../services/apiServices";
import Card from 'react-bootstrap/Card';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BusinessIcon from '@mui/icons-material/Business';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";



export default function SingleProject() {
  const nav = useNavigate();
  const { sProject } = useStateContext();
  const [data, setDate] = useState([]);

  useEffect(() => {
    sProject.length < 2 ? nav('/projects') : doApi();
  }, [])


  const doApi = async () => {
    const url = API_URL + `/users/singleProject/${sProject[0]}/${sProject[1]}`;
    try {
      const data = await apiGet(url);
      console.log(data);
      setDate(data);
    } catch (error) {
      console.log(error);
    }
  }



  return (

    <div className="p-[20px] m-[20px]">
      <div className='font-medium text-neutral-300 mb-0.5 border-2 p-[10px] flex justify-between bg-slate-700'>
        <span className="pt-2">רשימת דיירים בבנין</span>
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/projects' className='hover:text-white p-1'>חזור < ArrowBackIcon /></Link>
        </Button>
      </div>
      { data.length === 0 ? <div>אין דיירים בפרויקט זה</div> :
        <div className=" mh-[400px] border sm:flex flex-wrap p-4 justify-between items-center">
          {data.map((item) => (
            <Card key={item._id} className="sm:w-1/4 md:w-1/5 bg-slate-600 text-white shadow-2xl sm:mb-0 mb-5 sm:m-1 " >
              <Card.Img variant="top" className="p-2" src="https://images.pexels.com/photos/425160/pexels-photo-425160.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Card.Body>
                <Card.Title className="text-end p-1 mb-1"><Person2OutlinedIcon className="text-green-600" /> {item.name}</Card.Title>
                <Card.Text className="text-end p-1 mb-1"><AccountTreeIcon className="text-[goldenrod] bg-[#]" /> {item.p_name}</Card.Text>
                <Card.Text className="text-end p-1 mb-1"><BusinessIcon /> {item.city_name}</Card.Text>
                <Card.Text className="text-end p-1 mb-1"><CottageOutlinedIcon /> {item.street_name} - {item.building_name}</Card.Text>
                <button className="border text-white  p-1 rounded">ראה לקוח</button>
              </Card.Body>
            </Card>
          ))}
        </div>
      }
    </div>
  );
}
