import React, { useState } from 'react'
import "./slider.scss";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

export const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const data = [
      // "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "https://images.pexels.com/photos/5704736/pexels-photo-5704736.jpeg?auto=compress&cs=tinysrgb&w=1600",
      // "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];
    const prevSlide = () => {
        setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
        console.log(currentSlider)
    }
    const nextSlide = () => {
         setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);
    }
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlider * 100}vw )` }}
      >
        <img src={data[0]} alt="slider" />
               <img src={data[1]} alt="slider" />
        <img src={data[2]} alt="slider" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
