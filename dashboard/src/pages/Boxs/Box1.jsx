import React from 'react'
import { topDealUsers } from "../../component/data";
import "./boxOne.css";

export const Box1 = () => {
    
  return (
      <div className='top-box'>
          <h1>Top Deals</h1>
          <div className='list'>
          {
              topDealUsers.map((deal) => (
                  <div key={deal.id} className='listItem'>
                      <div className='user'>
                          <img src={deal.img} alt="dsaf" />
                          <div className='userTexts'>
                              <span className='username'>{deal.username}</span>
                              <span className='email'>{deal.email}</span>
                          </div>
                      </div>                      
                      <span>${deal.amount }</span>
                  </div>
              ))
          }</div>
    </div>
  )
}
