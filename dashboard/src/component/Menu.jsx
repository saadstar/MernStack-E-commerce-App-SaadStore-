import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from "./data";
export const Menu = () => {

 
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className='item' key={item.id}>
        <span className='title'>{item.title}</span>
          {item.listItem.map((ul) => (
         <Link to={ul.url} className='listItem'  key={ul.id}>
         {ul.icon}
            <span className='listItemTitle title'>{ ul.title}</span>
        </Link>
       ))  }       
      </div>
     ))} 
    </div>
  )
}
