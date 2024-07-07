import React from 'react'
import Shops from '../components/Shop'

const Shop = ({ handleAddToCart }) => {
  return (
    <div id='shop'>
        <br></br>
        <br></br>
        <br></br>
        <Shops handleAddToCart={handleAddToCart}/>
        <br></br>
        <hr></hr>
    </div>
  )
}

export default Shop
