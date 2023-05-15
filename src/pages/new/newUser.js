import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


  export default function NewUser() {


    return (

      <div className="p-[20px] m-[20px]">
        <div className='font-medium text-neutral-400 mb-0.5 border-2 p-[8px]  flex justify-between'>
          Add new user
          <Button size="small" variant="contained" className='items-end' >
            <Link to='/users' className='hover:text-white'>BACK <ArrowForwardIcon size='small' /></Link>
          </Button>
        </div>
        <form className="md:h-[400px]">
          <div>

          </div>
        </form>
      </div>
    )
  }
