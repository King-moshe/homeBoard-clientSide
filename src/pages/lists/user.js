import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div className='p-[20px] md:m-[20px] md:w-auto '>
      <div className='font-medium text-neutral-400 mb-0.5 border-2 p-[8px]  flex justify-between'>
        Users Table
        <Button size="small" variant="contained" className='items-end' >
          <Link to='/users/appUser' className='hover:text-white'>Add new user</Link>
        </Button>
      </div>
      <div className='border-2 md:h-96'>
        <table className='table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Project</th>
              <th>Builhthing</th>
              <th>Floor</th>
              <th>Apartment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>aa</td>
              <td>aa</td>
              <td>aa</td>
              <td>aa</td>
              <td>aa</td>
              <td>aa</td>
              <td>aa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
