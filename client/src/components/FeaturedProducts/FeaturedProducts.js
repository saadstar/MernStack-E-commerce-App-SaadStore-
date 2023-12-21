import React, { useEffect, useState } from 'react'
import "./featuredProducts.scss";
import { Loading } from "../Loading/Loading";
import  {Link} from "react-router-dom";
import axios  from "axios";

export const FeaturedProducts = ({type}) => {
  const [data, setData] = useState([]);

  const fetchData =async () => {
    try {
      const res = await axios.get("https://saadstore.onrender.com/api/products");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  },[])
    return (
      <div className="featuredProducts">
        <div className={type === "card" ?"none":"top"} >
          <h1>{type} Products</h1>
          <p>
            Lorem Ipsum placeholder text for use in your graphic, print and web
            layouts, and discover plugins for your favorite writing, design and
            blogging tools. Explore the origins, history and meaning of the
            famous passage, and learn how Lorem Ipsum went from scrambled Latin
            passage to ubiqitous .
          </p>
        </div>
        <div className="bottom" >
          {data.length === 0 ? <Loading /> :
            data.map((item) => (
            <Link className="link" to={`/product/${item._id}`}>
              <div className="card" key={item._id}>
                <div className="image">
                  {item.isNew && <span>New Season</span>}
                  <img src={item.img} alt={item.title} className="mainImg" />
                  <img src={item?.img2} className="seconedImg" alt="" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                  <h3 className="0ldPrice">${item.oldPrice}</h3>
                  <h3 className="Price">${item.price}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
}
