import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Box } from "@mui/material";
import { API_URL } from '../../constant/url';
import React, { useState, useEffect } from 'react';
import { apiDelete, apiGet } from '../../services/apiServices';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function ProjectsList() {

  const [data, setData] = useState([]);
  const [query] = useSearchParams();


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

  const deleteProject = async (_idDel) => {
    if (window.confirm("Delete user?")) {
      try {
        const url = API_URL + "/projects/" + _idDel;
        const data = await apiDelete(url, "DELETE");
        if (data.deletedCount) {
          doApi();
          toast.info("Project deleted")
        }
      }
      catch (err) {
        console.log(err);
        toast.error("There problem")
      }
    }
  }

  const columns = [
    
    {
      field: 'city_name',
      headerName: 'City',
      width: 160,
      editable: true,
    },
    {
      field: 'street_name',
      headerName: 'Street',
      width: 140,
      editable: true,
    },
    {
      field: 'p_name',
      headerName: 'Project name',
      width: 130,
      editable: true,
    },
    {
      field: 'building_name',
      headerName: 'Building',
      width: 100,
      editable: true,
    },
    {
      field: 'contractor_name',
      headerName: 'Constructor',
      width: 150,
      editable: true,
    },
   
  ];


  return (

    <div className='p-[20px] md:m-[20px] md:w-auto w-screen'>
      <div className='font-medium text-neutral-400 mb-0.5 border-2 p-[8px]  flex justify-between'>
        Projects Table
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/projects/newProject' className='hover:text-white'>Add new project</Link>
        </Button>
      </div>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          editMode='row'
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />

      </Box>
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