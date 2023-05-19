import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function NewProject() {

  //TODO:create doApiPost
  //TODO:create onSubForm









  return (

    <div className="p-[20px] m-[20px]">
      <div className='font-medium text-neutral-500 mb-0.5 border-2 p-[10px] flex justify-between'>
        <span className="pt-2"> Add new Project</span>
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/projects' className='hover:text-white p-1'>BACK <ArrowForwardIcon /></Link>
        </Button>
      </div>
      <div className=" md:h-[400px] mh-[400px] border">
        <form >
          <div className="p-2">
            <div className="mt-2">
              <label>City</label>
              <br />
              <select className="mt-2">
                <option>Chose City:</option>
                <option>Jerusalem</option>
                <option>Tel Aviv</option>
              </select>
            </div>
            <div>
              <label>Street Nmae</label>
              <select>
                <option>Chose Street:</option>
                <option>Iven Gvirol</option>
                <option>Hsalom</option>
              </select>
            </div>
            <div>
              <label>Project Nmae</label>
              <input type="text" />
            </div>
            <div>
              <label>Building Nmae</label>
              <input type="text" />
            </div>
            <div>
              <label>Constructor Nmae</label>
              <select>
                <option>Chose Constructor:</option>
                <option>Ibrahim Hamed</option>
                <option>Hagag Group</option>
              </select>
            </div>
            <Button>Create new Project</Button>
          </div>
        </form>
      </div>
    </div>

  )
}
