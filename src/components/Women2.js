import React, { useState, useEffect } from 'react';
import Rating from "./Rating";
import axios from 'axios';

export default function Women2({ handleAddToCart }){
  const [products, setProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [currentItem2, setCurrentItem2] = useState(1);


  useEffect(() => {
    // Fetch data from your backend API when the component mounts
    axios.get('https://fashionstorebackend-vsw0.onrender.com/womenProductsApp') // Replace with your backend API URL
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
    return <div className="server-connection-animation wo">
    <div className="character"></div>
    <p>Hang tight, our friendly robot is working on connecting to the server!</p>

  </div>;
  }
    return (
        <div className="women2">
            <img src={require("../assets/Rectanglebg.png")} loading="eager" className="WomenRec" />
            <div className="menHead">
              <div className="M_L">
                <h1 className="m1">Women</h1>
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
            <div className="MenBanner womenBanner">
              <div className="leftBanner womenLeftBanner">
                <h1>For WoMen</h1>
                <button onClick={handleNext}>More</button>
              </div>
              <div className="right1">
                <img src={`/assets/${currentItemData.image}`} />
                <h5 className="mentextheading">{currentItemData.heading}</h5>
                <hr />
                <div className="Mprice">₹ {currentItemData.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
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
          </div>
    );
}
