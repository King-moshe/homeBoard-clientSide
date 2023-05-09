import React from "react"
import {  Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Visibility, VisibilityOff } from "@mui/icons-material";


export default function NewUser() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

    <div className="p-[20px] m-[20px]">
      <div className='font-medium text-neutral-400 mb-0.5 border-2 p-[8px]  flex justify-between'>
        Add new user
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/users' className='hover:text-white'>BACK <ArrowForwardIcon size='small' /></Link>
        </Button>
      </div>
      <FormControl
        className="border md:h-96 mh-96 md:p-3 items-center"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            label="Full Name"
          />
          <TextField
            required
            label="Email"
          />

          <TextField
            required
            label="Phone Number"
            type="tel"
          />
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        </div>
      </FormControl>  
   
    </div>

    // {/* <form className="h-96 w-full block md:flex border-2">
    //   <div className="border h-96 md:w-6/12 ps-3 pt-3 md:pe-32 pe-3">
    //     <label>Full Name:</label>
    //     <input type="text" className="form-control "placeholder="Enter your FullName" required/>
    //   </div>
    //   <div className="border h-96 md:w-6/12 mb-4 md:mb-0">rririri</div>
    // </form> */}
  )
}
