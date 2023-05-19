import { Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@mui/material";
import { API_URL } from '../../constant/url';
import React, { useState, useEffect } from 'react';
import { apiDelete, apiGet } from '../../services/apiServices';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function UsersList() {
  const [data, setData] = useState([]);
  const [query] = useSearchParams();
  const page = query.get("page") || 1;

  useEffect(() => {
    doApi();
  }, [query])



  const doApi = async () => {
    const url = API_URL + '/users/usersList';
    try {
      const data = await apiGet(url);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);

    }
  }

  const deleteUser = async (_idDel, _name) => {
    if (window.confirm(`Are you sore to remove ${_name} User?`)) {
      try {
        const url = API_URL + "/users/" + _idDel;
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




  return (
    <div className='p-[20px] md:m-[20px] md:w-auto '>
      <div className='font-medium text-neutral-500 mb-0.5 border-2 p-[10px] flex justify-between'>
        <span className="pt-2">Users Table</span>
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/users/newUser' className='hover:text-white p-1'><PersonAddIcon/></Link>
        </Button>
      </div>
      <TableContainer component={Paper} className="drop-shadow-xl md:h-[400px] mh-[400px]">
        <Table className="border-collapse border border-slate-400">
          <TableHead>
            <TableRow className=" bg-[#0009] ">
              <TableCell className="border border-slate-300 text-white text-center">#</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Name</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Email</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Phone</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Project</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Building</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Floor</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Apartment</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Role</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Edit</TableCell>
              <TableCell className="border border-slate-300 text-white text-center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='center'>{((page - 1) * 15) + i + 1}</TableCell>
                <TableCell className="border border-slate-300"><AccountCircleIcon/> {row.name}</TableCell>
                <TableCell className="border border-slate-300">{row.email}</TableCell>
                <TableCell className="border border-slate-300">{row.phone}</TableCell>
                <TableCell className="border border-slate-300">{row.p_name}</TableCell>
                <TableCell align='center' className="border border-slate-300">{row.building_name}</TableCell>
                <TableCell align="center" className="border border-slate-300">{row.story}</TableCell>
                <TableCell align='center' className="border border-slate-300">{row.apartment}</TableCell>
                <TableCell className="border border-slate-300">{row.role}</TableCell>
                <TableCell align='center' className="border border-slate-300"><Button className="border border-blue-500 rounded-xl"><EditIcon className=" hover:text-blue-700" /></Button></TableCell>
                <TableCell align='center' className=""><Button className="border border-red-600 rounded-xl" onClick={() => { deleteUser(row._id, row.name) }}><DeleteIcon className="text-red-600" /></Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}