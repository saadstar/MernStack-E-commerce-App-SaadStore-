import React, { useEffect, useState } from 'react'
import "../usersFeatures/user.css";
import { DataGrid, GridToolbar, } from '@mui/x-data-grid';
import { AddProduct } from './AddProduct';
import axios from "axios";
import { EditProduct } from "./EditProduct";
import {DeleteProduct } from "./DeleteProduct";

export const Products = () => {
  const [open, setOpen] = useState(false);
   const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const [deleteId, setDeleteId] = useState("");
  const [rowsData, setRowsData] = useState([]);
  const fetchProducts = async() => {
    try {
      const res= await axios.get("http://localhost:3500/api/products/")
      setRowsData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchProducts();
},[])
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "img",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
       return        <img src={params.row.img || "/noavatar.png"} className='columnImg' alt="" />        
      }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: false,
  },
  {
    field: 'desc',
    headerName: 'Description',
    width: 150,
    editable: false,
    },    
  {
    field: 'oldPrice',
    headerName: 'Old Price',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'category',
    headerName: 'category',
    width: 120,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    width: 160,
  },
  {
    field: 'isNew',
    headerName: 'isNew',
    width: 100,
    type: Boolean,
      renderCell: (params) => {
       return       params.row.isNew?<i class="fa-solid fa-check" id="correct"></i>:<i id="wrong" class="fa-solid fa-xmark"></i>      
      }
  },
  {
    field: 'Action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      const editHandler = () => {
        setEditData(params.row);
        setEditOpen(true)
  }
        const deleteHandler = () => {
    setDeleteId(params.row.id);
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
  const rows = rowsData.map((item) => {
 return { id: item._id,img:item.img, title:item.title,desc:item.desc,oldPrice:item.oldPrice,price:item.price,category:item.category,createdAt:item.createdAt,isNew:item.isNew}
})

  return (
    <div className='users'>
      <div className='info'>
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Product</button>
      </div>
      {rowsData.length === 0?<div class="lds-facebook"><div></div><div></div><div></div></div>:<div className='dataTable'>
      <DataGrid
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
        />
      </div>}
      {
        open && <AddProduct setOpen={setOpen} slug="Product" colums={"colums"} />
      }
      {
        editOpen && <EditProduct setEditOpen={setEditOpen} slug="Product" colums={"colums"} editData={editData} />
      }
      {
        deleteOpen && <DeleteProduct setDeleteOpen={setDeleteOpen} slug="PRODUCT" colums={"colums"} deleteId={deleteId} />
      }
    </div>
  )
}
