import React from 'react'
import Browse from '../components/Browse';
import Women from '../components/Women';
import Men from '../components/Men';
import Women2 from '../components/Women2';
import Shop from '../components/Shop';
import Blog from '../components/Blog';
import Header from '../components/Header';


const Home = ({handleAddToCart}) => {
  return (
    <div>
      <Header />
      <Browse/> 
      <Women/>
      <Men handleAddToCart={handleAddToCart}/>
      <Women2 handleAddToCart={handleAddToCart}/>
      <Shop handleAddToCart={handleAddToCart}/>
      <Blog/>
    </div>
  )
}

export default Home
