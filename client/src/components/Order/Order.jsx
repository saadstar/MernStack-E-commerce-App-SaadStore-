import React, { useContext, useEffect ,useState} from 'react';
import "./order.scss";
import axios from 'axios';
import { AuthContext } from '../AuthContext/AuthContext';


export const Order = () => {
    const [order, setOrder] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const fetchOrders = async () => {
            const res = await axios.get(`http://localhost:3500/api/orders/${user._id}`);
            setOrder(res.data);
        }
        fetchOrders();
    }, []);
  return (
      <div className='order'>
          <h1>Track Your Order</h1>
        {order.length === 0?  <h4>You have no Orders to Track</h4>:
       order.map((item)=> <div className='orderContainer'>
              <div className="oneOrder">
                  <img src={item.img} alt="order" width={90} height={90} />
                  <div className="content">
                      <div className="title_price">
                          <h2>{item.title} </h2>
                       <span>{item?.quentity} X { item.price}</span>
                      </div>
                      <div className="desc">{item.desc}</div>
                      <div className="total">
                       SUBTOTAL:{' '}<span>${item.quentity * item.price }</span> 
                      </div>
                  </div>
              </div>
          </div>)}
    </div>
  )
}
