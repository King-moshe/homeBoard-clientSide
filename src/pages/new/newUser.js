// import React from "react"
// import { Button } from "@mui/material"
// import { Link } from "react-router-dom"
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//   export default function NewUser() {


//     return (

//       <div className="p-[20px] m-[20px]">
//       <div className='font-medium text-neutral-300 mb-0.5 border-2 p-[10px] flex justify-between bg-slate-700'>
//         <span className="pt-2"> צור משתמש חדש</span>
//         <Button size="small" variant="contained" className='items-end' >
//           <Link to='/users' className='hover:text-white p-1'>חזור  <ArrowBackIcon /></Link>
//         </Button>
//       </div>
//       <div className=" md:h-[400px] mh-[400px] border flex p-4 bg-slate-600  drop-shadow-xl">
//         <form className="w-full border">
//           <div>

//           </div>
//         </form>
//       </div>
//       </div>
//     )
//   }
import React from "react"
import { Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { API_URL } from "../../constant/url";
import { apiPost } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";


export default function NewUser() {

  const nav = useNavigate();
  const { register, handleSubmit } = useForm();





  const doApiPost = async (_bodyData) => {
    try {
      const url = API_URL + "/users";
      const data = await apiPost(url, _bodyData);
      if (data._id) {
        toast.success("New Project added");
        nav("/users")
      }
    } catch (error) {
      console.log(error);
      toast.error('There problem, try again later')
    }
  }

  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    doApiPost(_bodyData);
  }

  return (

    <div className="p-[20px] m-[20px]">
      <div className='font-medium text-neutral-300 mb-0.5 border-2 p-[10px] flex justify-between bg-slate-700'>
        <span className="pt-2"> צור משתמש חדש</span>
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/users' className='hover:text-white p-1'>חזור < ArrowBackIcon /></Link>
        </Button>
      </div>
      <div className=" md:h-[400px] mh-[400px] border flex p-4 bg-slate-600  drop-shadow-xl">
        <form className="w-full " onSubmit={handleSubmit(onSubForm)}>
          <div className="md:flex block">
            <div className="md:w-1/4 md:pe-4 md:p-1">
              <label className="text-white">שם </label>
              <input {...register("name", { required: true, minLength: 2 })} type="text" placeholder="שם..." className="w-full p-2 mt-2 border-solid border-2 rounded-lg" />
            </div>
            <div className="md:w-1/4 md:pe-4 md:p-1">
              <label className="text-white">מייל</label>
              <input {...register("email", { required: true, minLength: 2 })} type="email" placeholder="מייל..." className="w-full p-2 mt-2 border-solid border-2 rounded-lg" />
            </div>
            <div className="md:w-1/4 md:pe-4 md:p-1">
              <label className="text-white">סיסמה</label>
              <input {...register("password", { required: true, minLength: 2 })} type="text" placeholder="סיסמה..." className="w-full p-2 mt-2 border-solid border-2 rounded-lg" />
            </div>
            <div className="md:w-1/4 md:pe-4 md:p-1">
              <label className="text-white">טלפון</label>
              <input {...register("phone", { required: true, minLength: 2 })} type="phone" placeholder="טלפון..." className="w-full p-2 mt-2 border-solid border-2 rounded-lg" />
            </div>
          </div>
          <div className="block md:flex">
            <div className="md:w-1/2 md:pe-4 md:p-1 mt-3">
              <label className="text-white">שם הפרוייקט</label>
              <input placeholder="שם הפרוייקט..." {...register("p_name", { required: true, minLength: 2 })} className="w-full p-2 mt-2 border-solid border-2 rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pe-4 md:p-1 mt-3">
              <label className="text-white">שם הבניין</label>
              <input placeholder="שם הבניין..."  {...register("building_name", { required: true, minLength: 2 })} className="w-full p-2 mt-2 border-solid border-2 rounded-lg" />
            </div>
            <div className="md:w-1/4 md:pe-4 md:p-1 mt-3">
              <label className="text-white">מספר קומה</label>
              <input placeholder="קומה..."  {...register("story", { required: true, minLength: 1 })} type="number" className="w-full p-2 mt-2 border-solid border-2 rounded-lg" />
            </div>
            <div className="md:w-1/ md:pe-4 md:p-1 mt-3">
              <label className="text-white">מספר דירה</label>
              <input placeholder="דירה..."  {...register("apartment", { required: true, minLength: 1 })} type="number" className="w-full p-2 mt-2 border-solid border-2 rounded-lg" />
            </div>
          </div>


          <div className="items-center justify-center flex mt-4">
            <button className="border btn btn-primary">צור משתמש חדש</button>
          </div>
        </form>
      </div>
    </div>

  )
}