import React, { useState, useEffect } from 'react';
import Rating from "./Rating";
import axios from 'axios';

export default function Shop({ handleAddToCart }){

  const [products, setProducts] = useState([]);

  const [newVariable1, setNewVariable1] = useState(0);
  const [newVariable2, setNewVariable2] = useState(1);
  const [newVariable3, setNewVariable3] = useState(2);
  const [newVariable4, setNewVariable4] = useState(3);

  useEffect(() => {
    // Fetch data from your backend API when the component mounts
    axios.get('https://fashionstorebackend-vsw0.onrender.com/allProductsApp') // Replace with your backend API URL
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleNext = () => {
    setNewVariable1((newVariable1 + 1) % products.length);
    setNewVariable2((newVariable2 + 1) % products.length);
    setNewVariable3((newVariable3 + 1) % products.length);
    setNewVariable4((newVariable4 + 1) % products.length);
  };

  const handlePrev = () => {
    setNewVariable1((newVariable1 - 1 + products.length) % products.length);
    setNewVariable2((newVariable2 - 1 + products.length) % products.length);
    setNewVariable3((newVariable3 - 1 + products.length) % products.length);
    setNewVariable4((newVariable4 - 1 + products.length) % products.length);
  };


  const NewArrival = () => {
    setNewVariable1(0);
    setNewVariable2((0 + 1) % products.length);
    setNewVariable3((0 + 2) % products.length);
    setNewVariable4((0 + 3) % products.length);
  };
  const BestSeller = () => {
    setNewVariable1(8);
    setNewVariable2((8 + 1) % products.length);
    setNewVariable3((8 + 2) % products.length);
    setNewVariable4((8 + 3) % products.length);
  };
  const Popular = () => {
    setNewVariable1(16);
    setNewVariable2((16 + 1) % products.length);
    setNewVariable3((16 + 2) % products.length);
    setNewVariable4((16 + 3) % products.length);
  };

  
  const newVariableData1 = products[newVariable1];
  const newVariableData2 = products[newVariable2];
  const newVariableData3 = products[newVariable3];
  const newVariableData4 = products[newVariable4];

  const handleAddToCartClick = (itemData) => {
    // You can perform any additional logic here before calling handleAddToCart
    handleAddToCart(itemData);
  };

  const [activeHeading, setActiveHeading] = useState(1);

  const handleHeadingClick = (headingNumber) => {
    setActiveHeading(headingNumber);
  };
  if (!products || products.length === 0) {
    return <div className="server-connection-animation">
    <div className="character"></div>
    <p><h2>Waiting for data to land from space!</h2></p>
  </div>;
  }

    return (
        <div className="shop">
            <img src={require("../assets/Rectanglebg.png")} loading="eager" className="ShopRec" />
            <div className="shopHead">
              <div className="Shopleft">
                <div className="M_L" onClick={NewArrival}>
                  <h1 className="m1" style={{ color: activeHeading === 1 ? 'black' : '#808080' }} onClick={() => handleHeadingClick(1)}>New Arrivals</h1>
                  <div className="rectangle" />
                </div>
                <div className="M_L" onClick={BestSeller}>
                  <h1 className="m1 s1" style={{ color: activeHeading === 2 ? 'black' : '#808080' }} onClick={() => handleHeadingClick(2)}>Best Sellers</h1>
                  <div className="rectangle" />
                </div>
                <div className="M_L" onClick={Popular}>
                  <h1 className="m1 s1" style={{ color: activeHeading === 3 ? 'black' : '#808080' }} onClick={() => handleHeadingClick(3)}>Popular</h1>
                  <div className="rectangle" />
                </div>
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
            <div className="ShopItems">
              <div className="right1">
                <img src={`/assets/${newVariableData1.image}`} />
                <h5 className="mentextheading">{newVariableData1.heading}</h5>
                <hr />
                <div className="Mprice sp">₹ {newVariableData1.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  <div className="sbtn">
                    <button onClick={() => handleAddToCartClick(newVariableData1)}>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="right1">
                <img src={`/assets/${newVariableData2.image}`} />
                <h5 className="mentextheading">{newVariableData2.heading}</h5>
                <hr />
                <div className="Mprice sp">₹ {newVariableData2.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  <div className="sbtn">
                    <button onClick={() => handleAddToCartClick(newVariableData2)}>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="right1">
                <img src={`/assets/${newVariableData3.image}`} />
                <h5 className="mentextheading">{newVariableData3.heading}</h5>
                <hr />
                <div className="Mprice sp">₹ {newVariableData3.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  <div className="sbtn">
                    <button onClick={() => handleAddToCartClick(newVariableData3)}>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="right1">
                <img src={`/assets/${newVariableData4.image}`} />
                <h5 className="mentextheading">{newVariableData4.heading}</h5>
                <hr />
                <div className="Mprice sp">₹ {newVariableData4.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  <div className="sbtn">
                    <button onClick={() => handleAddToCartClick(newVariableData4)}>Add to cart</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
    );
}
