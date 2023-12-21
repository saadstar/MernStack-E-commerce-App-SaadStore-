import React from 'react'
import { Slider } from '../../components/slider/Slider'
import "./home.scss";
import { FeaturedProducts } from '../../components/FeaturedProducts/FeaturedProducts';
import { Categories } from '../../components/Categories/Categories';
import { Contact } from '../../components/Contact/Contact';

export const Home = () => {
 
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories/>
      <FeaturedProducts type="Trending" />
      <Contact/>
    </div>
  )
}
