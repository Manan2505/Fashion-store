
// import React, { useState } from 'react';
// import Rating from "./Rating";

// export default function Men({handleAddToCart}){

//     let dummyData = [
//       {
//         id: 1,
//         image: 'm1.png',
//         heading: "Men's Parker Slim-Fit",
//         price: '₹ 2,499.11'
//       },
//       {
//         id: 2,
//         image: 'm2.png',
//         heading: 'Michael Kors',
//         price: '₹ 1,754.52'
//       },
//       {
//         id: 3,
//         image: 'm3.webp',
//         heading: 'The North Face T-Shirt',
//         price: '₹ 691.23'
//       },
//       {
//         id: 4,
//         image: 'm4.webp',
//         heading: 'ASOS Dark oversized hoodie',
//         price: '₹ 2,606.84'
//       },
//       {
//         id: 5,
//         image: 'm12.webp',
//         heading: 'Jack & Jones puffer in black',
//         price: '₹ 6,006.15'
//       },
//       {
//         id: 6,
//         image: 'm7.webp',
//         heading: 'The North Face Floral Jacket',
//         price: '₹ 3,406.76'
//       },
//       {
//         id: 7,
//         image: 'm8.webp',
//         heading: 'New Balance 574 Sneakers ',
//         price: '₹ 5,698.67'
//       },
//       {
//         id: 8,
//         image: 'm9.webp',
//         heading: 'New Balance 480 Sneakers B/W',
//         price: '₹ 4,395.58'
//       },
//       {
//         id: 9,
//         image: 'm10.webp',
//         heading: 'New Balance 610 Sneakers in blue',
//         price: '₹ 5,608.09'
//       },
//       {
//         id: 10,
//         image: 'm6.webp',
//         heading: 'Unisex Conan fitted T-Shirt',
//         price: '₹ 906.80'
//       },
//       {
//         id: 11,
//         image: 'm5.jpeg',
//         heading: 'CK96 Design hoodie',
//         price: '₹ 1758.11'
//       },
//       {
//         id: 12,
//         image: 'm11.webp',
//         heading: 'Bershka super baggy jeans',
//         price: '₹ 2,970.52'
//       }
//     ];

//     const [currentItem, setCurrentItem] = useState(0);
//     const [newVariable, setNewVariable] = useState(1);
  
//     const handleNext = () => {
//       setCurrentItem((currentItem + 1) % dummyData.length);
//       setNewVariable((newVariable + 1) % dummyData.length);
//     };
  
//     const handlePrev = () => {
//       setCurrentItem((currentItem - 1 + dummyData.length) % dummyData.length);
//       setNewVariable((newVariable - 1 + dummyData.length) % dummyData.length);
//     };
  
//     const currentItemData = dummyData[currentItem];
//     const newVariableData = dummyData[newVariable];

//     const handleAddToCartClick = (itemData) => {
//       console.log('Item added to cart:', itemData);
//       handleAddToCart(itemData);
//     };


//     return (
//         <div className="men">
//             <div className="menHead">
//               <div className="M_L">
//                 <h1 className="m1">MEN</h1>
//                 <div className="m2" />
//               </div>
//               <div className="M_R">
//                 <div className="mArrowBox" onClick={handlePrev}>
//                   <i className="fi fi-br-angle-left mArrow" />
//                 </div>
//                 <div className="mArrowBox" onClick={handleNext}>
//                   <i className="fi fi-bs-angle-right mArrow" />
//                 </div>
//               </div>
//             </div>
//             <div className="MenBanner">
//               <div className="leftBanner">
//                 <h1>For Men</h1>
//                 <button>More</button>
//               </div>
//               <div className="right1">
//                 <img src={`/assets/${currentItemData.image}`} />
//                 <h5 className="mentextheading">{currentItemData.heading}</h5>
//                 <hr />
//                 <div className="Mprice">{currentItemData.price}</div>
//                 <div className="revContainer">
//                   <div className="review">
//                     <Rating/>
//                   </div>
//                   <div className="ReviewBtn">
//                     <button onClick={() => handleAddToCartClick(currentItemData)}>Add to cart</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="right2">
//                 <img src={`/assets/${newVariableData.image}`} />
//                 <h5 className="mentextheading">{newVariableData.heading}</h5>
//                 <hr />
//                 <div className="Mprice">{newVariableData.price}</div>
//                 <div className="revContainer">
//                   <div className="review">
//                     <Rating/>
//                   </div>
                  
//                   <div className="ReviewBtn">
//                     <button onClick={() => handleAddToCartClick(newVariableData)}>Add to cart</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <CartDisplay handleAddToCart={handleAddToCart}/> */}
//             <img src={require("../assets/Rectanglebg.png")} loading="eager" className="MenRec" />
//           </div>
//     );
// }




import React, { useState, useEffect } from 'react';
import Rating from "./Rating";
import axios from 'axios';

export default function Men({ handleAddToCart }) {
  const [products, setProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [currentItem2, setCurrentItem2] = useState(1);

  useEffect(() => {
    axios.get('https://fashionstorebackend-vsw0.onrender.com/menProductsApp')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleNext = () => {
    setCurrentItem((currentItem + 1) % products.length);
    setCurrentItem2((currentItem2 + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentItem((currentItem - 1 + products.length) % products.length);
    setCurrentItem2((currentItem2 - 1 + products.length) % products.length);
  };

  const currentItemData = products[currentItem];
  const currentItemData2 = products[currentItem2];

  const handleAddToCartClick = (itemData) => {
    handleAddToCart(itemData);
  };

  if (!products || products.length === 0) {
    return  <div class="server-connection-animation">
    <div class="character"></div>
    <div>
    <h2>Our hamsters are busy powering the server!</h2>
    <p>Please try again in a few minutes.</p>
    </div>
  </div>
  
  ;
  }

  return (
    <div className="men">
      <div className="menHead">
        <div className="M_L">
          <h1 className="m1">MEN</h1>
          <div className="m2" />
        </div>
        <div className="M_R">
          <div className="mArrowBox" onClick={handlePrev}>
            <i className="fi fi-br-angle-left mArrow" />
          </div>
          <div className="mArrowBox" onClick={handleNext}>
            <i className="fi fi-bs-angle-right mArrow" />
          </div>
        </div>
      </div>
      <div className="MenBanner">
        <div className="leftBanner">
          <h1>For Men</h1>
          <button onClick={handleNext}>More</button>
        </div>
        <div className="right1">
          <img src={`/assets/${currentItemData.image}`} alt={currentItemData.heading} />
          <h5 className="mentextheading">{currentItemData.heading}</h5>
          <hr />
          <div className="Mprice">₹ {currentItemData.price}</div>
          <div className="revContainer">
            <div className="review">
              <Rating />
            </div>
            <div className="ReviewBtn">
              <button onClick={() => handleAddToCartClick(currentItemData)}>Add to cart</button>
            </div>
          </div>
        </div>
              <div className="right2">
                <img src={`/assets/${currentItemData2.image}`} />
                <h5 className="mentextheading">{currentItemData2.heading}</h5>
                <hr />
                <div className="Mprice">₹ {currentItemData2.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  
                  <div className="ReviewBtn">
                    <button onClick={() => handleAddToCartClick(currentItemData2)}>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <CartDisplay handleAddToCart={handleAddToCart}/> */}
            <img src={require("../assets/Rectanglebg.png")} loading="eager" className="MenRec" />
          </div>
    );
}
