import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

  export default function NewUser() {


    return (

      <div className="p-[20px] m-[20px]">
      <div className='font-medium text-neutral-300 mb-0.5 border-2 p-[10px] flex justify-between bg-slate-700'>
        <span className="pt-2"> צור משתמש חדש</span>
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/users' className='hover:text-white p-1'>חזור  <ArrowBackIcon /></Link>
        </Button>
      </div>
      <div className=" md:h-[400px] mh-[400px] border flex p-4 bg-slate-600  drop-shadow-xl">
        <form className="w-full border">
          <div>

          </div>
        </form>
      </div>
      </div>
    )
  }
