import React from 'react'

export const NavBar = () => {
  return (
      <div className='navbar'>
          <div className='logo'>
              <i></i>
              <span>saadAdmin</span>
          </div>
          <div className='icons'>
              <i class="fa-solid fa-magnifying-glass"  id='icon'></i>
              <i class="fa-solid fa-border-all" id='icon'></i>
             <i class="fa-brands fa-codepen" id='icon'></i>
              <div className='notification' id='icon'>
                 <i class="fa-solid fa-bell"></i>
                  <span>1</span>
              </div>
              <div className='user'>
                  <img src="./images/user.jpeg" alt=""/>
                  <span>Jane</span>
              </div>
             <i class="fa-solid fa-gear"></i>
          </div>
    </div>
  )
}
