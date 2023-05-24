import React, { useEffect, useState } from "react"
import { useStateContext } from "../../context";
import { API_URL } from "../../constant/url";
import { apiGet } from "../../services/apiServices";


export default function SingleProject() {
  const { sProject } = useStateContext();
  const [data, setDate] = useState([])
 

  useEffect(() => {
    doApi();
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
    <div>
      name of project
    </div>
  )
}
