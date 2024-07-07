import React from 'react';
import Women2 from '../components/Women2';
import Mens from '../components/Men';

const Men = ({ handleAddToCart }) => {
  return (
    <div id='men'>
      <Mens handleAddToCart={handleAddToCart}/>
      <Women2 handleAddToCart={handleAddToCart}/>
    </div>
  );
}

export default Men;
