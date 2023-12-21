import React, { useEffect, useState } from 'react'
import { AddUser } from './AddUser';
import "./user.css";
import { DataGrid,  GridToolbar,  } from '@mui/x-data-grid';
import { EditUser } from './EditUser';
import { DeleteUser } from './DeleteUser';
import axios from "axios";

export const Users = () => {

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editUserId, setEditUserId] = useState("");
  const [deleteUserId, setDeleteUserId] = useState("");
  const[ rowData, setRowData ]= useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3500/api/auth/");     
      setRowData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return        <img src={params.row.img || "./images/noavatar.png"} alt="" />        
      }
  },
  {
    field: 'Username',
    headerName: 'Username',
    width: 150,
    editable: false,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
    {
     field: 'email',
    headerName: 'Email',
    width: 110,
    editable: false,
  },
  {
    field: 'Phone',
    headerName: 'phone',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'CreatedAt',
    headerName: 'CreatedAt',
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Verfied',
    width: 100,
    type: Boolean,
      renderCell: (params) => {
       return       params.row.status?<i class="fa-solid fa-check" id="correct"></i>:<i id="wrong" class="fa-solid fa-xmark"></i>      
      }
  },
  {
    field: 'Action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
        const editHandler = () => {
    setEditUserId(params.row.id);
    setEditOpen(true)
  }
        const deleteHandler = () => {
    setDeleteUserId(params.row.id);
    setDeleteOpen(true)
  }
  
       return (
         <div className='action'>          
           <i class="fa-solid fa-pen-to-square" style={{color:"green",fontSize:"20px"}}  onClick={editHandler}></i>
           <i class="fa-solid fa-trash" style={{color:"red",fontSize:"20px"}} onClick={deleteHandler}></i>
         </div>
       )
      }
  },
  ];
  
  const rows = rowData.map((item) => {
    return {
      id: item._id, Username: item.username, Avatar: "", firstName: 'Jon', status: item.isAdmin, email: item.email, CreatedAt: item.createdAt, Phone: 23242424
    }
  });
useEffect(() => {
    fetchUsers();
  },[])
  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <div className='dataTable'>
     {rows.length===0?<div class="lds-facebook"><div></div><div></div><div></div></div>: <DataGrid
      className='dataGrid'
       rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          }}
          slots={{toolbar:GridToolbar}}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps:{debounceMs:500}
            }
          }}
        pageSizeOptions={[5]}
        checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter 
          disableColumnSelector
          disableDensitySelector
        />}
      </div>
      {
        open && <AddUser setOpen={setOpen} slug="user" colums={"colums"} />
      }
      {
        editOpen && <EditUser setEditOpen={setEditOpen} slug="user" colums={"colums"} editUserId={editUserId} />
      }
      {
        deleteOpen && <DeleteUser setDeleteOpen={setDeleteOpen} slug="USER" colums={"colums"} deleteUserId={deleteUserId} />
      }
    </div>
  )
}
