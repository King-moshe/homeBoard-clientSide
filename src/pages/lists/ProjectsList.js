import { Button,  TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { API_URL } from '../../constant/url';
import React, { useState, useEffect } from 'react';
import { apiDelete, apiGet } from '../../services/apiServices';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BusinessIcon from '@mui/icons-material/Business';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ProjectsList() {

  const [data, setData] = useState([]);
  const [query] = useSearchParams();
  const nav = useNavigate();
  const page = query.get("page") || 1;

  useEffect(() => {
    doApi();
  }, [query])

  const doApi = async () => {
    const url = API_URL + '/projects/projectsList';
    try {
      const data = await apiGet(url);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);

    }
  }

  const deleteProject = async (_idDel, _name) => {
    if (window.confirm(`להסיר את ${_name} מרשימת הפרוייקטים?`)) {
      try {
        const url = API_URL + "/projects/" + _idDel;
        const data = await apiDelete(url, "DELETE");
        if (data.deletedCount) {
          doApi();
          toast.success("User deleted successfully")
        }
      }
      catch (err) {
        console.log(err);
        toast.error("There problem")
      }
    }
  }

  const onSubShowOne = () =>{
    nav('/projects/singleProject')
  }

  const editProject = () =>{
    nav('/projects/editProject')
  }
 


  return (

    <div className='p-[20px] md:m-[20px] md:w-auto w-screen'>
      <div className='font-medium text-neutral-300 mb-0.5 border-2 p-[10px] flex justify-between bg-slate-700'>
      <span className="pt-2">טבלת פרוייקטים</span>
      <div>
      <Button><KeyboardArrowRightIcon className="text-white "/></Button>
         <span>1</span>
         <Button><KeyboardArrowLeftIcon className="text-white"/></Button>        
      </div>
     
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/projects/newProject' className='hover:text-white p-1'>הוספת פרוייקט <DomainAddIcon/></Link>
        </Button>
      </div>
      <TableContainer component={Paper} className="drop-shadow-xl md:h-[400px] mh-[400px]">
        <Table className="border-collapse border border-slate-400">
          <TableHead>
            <TableRow className=" bg-slate-600 ">
              <TableCell className="border border-slate-300 text-white text-center">#</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">עיר</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">רחוב</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">שם הפרויקט</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">בנין (מספר או כינוי)</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">קבלן מבצע</TableCell>         
              <TableCell className="border border-slate-300 text-white text-center">עריכה</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">מחיקה</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>                
                <TableCell align='center'>{((page - 1) * 15) + i + 1}</TableCell>
                <TableCell align="center" className="border border-slate-300">{row.city_name}</TableCell>
                <TableCell align="center" className="border border-slate-300">{row.street_name}</TableCell>
                <TableCell align='center' className="border border-slate-300"><button onClick={onSubShowOne} className="border p-2 px-4 rounded-md hover:bg-blue-600  hover:text-white"><BusinessIcon/> {row.p_name } </button></TableCell>
                <TableCell align='center' className="border border-slate-300">{row.building_name}</TableCell>              
                <TableCell align='center' className="border border-slate-300">{row.contractor_name}</TableCell>              
                <TableCell align='center' className="border border-slate-300"><Button className="border rounded-xl" onClick={editProject}><EditIcon className=" hover:text-blue-700" /></Button></TableCell>
                <TableCell align='center' className=""><Button className="border border-red-600 rounded-xl" onClick={() => { deleteProject(row._id, row.p_name) }}><DeleteIcon className="text-red-600" /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

























// import React, { useState, useEffect } from 'react';
// import { apiDelete, apiGet } from '../../services/apiServices'
// import { Link, useSearchParams } from 'react-router-dom';
// import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Table, Button } from "@mui/material";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { toast } from 'react-toastify';
// import { API_URL } from '../../constant/url';



// export default function ProjectsList() {

//   const [data, setData] = useState([]);
//   const [query] = useSearchParams();


//   useEffect(() => {
//     doApi();
//   }, [query])

//   const doApi = async () => {
//     const url = API_URL + '/projects/projectsList';
//     try {
//       const data = await apiGet(url);
//       console.log(data);
//       setData(data);
//     } catch (error) {
//       console.log(error);

//     }
//   }

//   const deleteProject = async (_idDel) => {
//     if (window.confirm("Delete project?")) {
//       try {
//         const url = API_URL + "/projects/" + _idDel;
//         const data = await apiDelete(url, "DELETE");
//         if (data.deletedCount) {
//           doApi();
//           toast.info("Project deleted successfully")
//         }
//       }
//       catch (err) {
//         console.log(err);
//         toast.error("There problem")
//       }
//     }
//   }



//   const page = query.get("page") || 1;
//   return (
   
     
//         <div className='p-[20px] md:m-[20px]  md:w-auto '>
//           <div className='font-medium text-neutral-400 mb-0.5 border-2 p-[8px]  flex justify-between'>
//             Projects Table
//             <Button size="small" variant="contained" className='items-end' >
//               <Link to='/projects/newProject' className='hover:text-white'>Add new project</Link>
//             </Button>
//           </div>
//           <TableContainer component={Paper} sx={{ maxHeight: "300px" }} className='drop-shadow-xl bg-slate-100'>
//             <Table stickyHeader className=''>
//               <TableHead >
//                 <TableRow align="center">
//                   <TableCell>Id</TableCell>
//                   <TableCell>Project Name</TableCell>
//                   <TableCell>City</TableCell>
//                   <TableCell>Street</TableCell>
//                   <TableCell>Building name(or Number)</TableCell>
//                   <TableCell>Contractor Name</TableCell>
//                   <TableCell>Dtae created</TableCell>
//                   <TableCell>Delete</TableCell>
//                   <TableCell>Edit</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody >
//                 {data.map((row, i) => (
//                   <TableRow align="center" key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
//                     <TableCell>{((page - 1) * 15) + i + 1}</TableCell>
//                     <TableCell>{row.p_name}</TableCell>
//                     <TableCell>{row.city_name}</TableCell>
//                     <TableCell>{row.street_name}</TableCell>
//                     <TableCell>{row.building_name}</TableCell>
//                     <TableCell>{row.contractor_name}</TableCell>
//                     <TableCell>{row.date_created.substring(0, 10)}</TableCell>
//                     <TableCell ><Button onClick={() => {
//                       deleteProject(row._id);
//                     }} className='text-center me-10' size='small' color='error' variant="outlined" startIcon={<DeleteIcon />}>Delete</Button></TableCell>
//                     <TableCell><Button size='small' variant="outlined" startIcon={<EditIcon />}>Edit</Button></TableCell>
//                   </TableRow>
//                 ))
//                 }
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
   
//   )
// }