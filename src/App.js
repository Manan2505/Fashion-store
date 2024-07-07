import React, { useState,useEffect } from 'react';
import './App.css';

import Footers from './components/Footer';
import Copyrights from './components/Copyrights';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Footer from './pages/Footer';
import Men from './pages/Men';
import Women2 from './pages/Women2';
import Shop from './pages/Shop';
import { useNavigate } from 'react-router-dom';
import Contact from './pages/Contact'
import Login from './pages/Login';
import CartDisplay from './components/CartDisplay';

import BlogComponent from './components/BlogComponent'; // Adjust the path accordingly

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    if(!user){
      alert("Please Login first to add item to cart.");
      navigate('/login');
    }
    else{
      alert(`${item.heading} Added to Cart`);
      console.log('Item added to cart:', item);
      setCartItems([...cartItems, item]);
    }
  };
  const handleRemoveFromCart = (itemHeading) => {
    const updatedCart = cartItems.filter(item => item.heading !== itemHeading);
    setCartItems(updatedCart);
  };


    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const handleSignIn = (userData) => {
      setUser(userData);
    };
  
    const handleSignOut = () => {
      setUser(null);
      navigate('/');
    };

    let userdetails={};
    if(user){
      userdetails = {
        name: `${user.first_name + ' ' + user.last_name}`,
        email: `${user.email}`,
        phone:`${user.phone_number}`,
      };
    }
    useEffect(() => {
      const handleToggle = () => {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('responsive');
      };
  
      const toggleButton = document.querySelector('.toggle-btn');
      toggleButton.addEventListener('click', handleToggle);
  
      // Clean up the event listener when the component is unmounted
      return () => {
        toggleButton.removeEventListener('click', handleToggle);
      };
    }, []); 

    
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>THE FASHION STORE</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="shortcut icon" href="assets/logo-for-a-website-name-of-website-is-the-fashion-store-254940071.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
        <div className="wrapper">

          <div className="top">
            <div className="part1">
              <i className="fi fi-sr-shopping-cart" />
              free shipping on all orders
            </div>
            <div className="part2">
              <i className="fi fi-sr-money-check-edit" />
              100% money back guarantee
            </div>
            <div className="part3">
              <i className="fi fi-sr-alarm-clock" />
              online support 24/7
            </div>
          </div>
          <div className="main">
            <div className="logo">
              <NavLink to='/home'><img src={require("./assets/Logo.png")} alt='logo' loading="lazy" /></NavLink>
            </div>
            <div className="maincontainer">
              <div className="searchBar">
                <input type="search" name id="search" placeholder="Search" />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search mgGlass" />
                </button>
                <span className="spann">|</span>
                <select name="category" id="category">
                  <option value>All Categories &nbsp; &nbsp;</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Wallets">Wallets</option>
                  <option value="Bags">Bags</option>
                  <option value="Caps & Hats">Caps &amp; Hats</option>
                </select>
              </div>
              {user ? (<div className='loginhogya'>
  <div class="icon-wrapper">
    <div class="profile-icon">{user.first_name.toUpperCase()[0]}</div><h1 className="glow">Hello, {user.first_name.toUpperCase()}</h1> </div>
  <button onClick={handleSignOut}>Logout</button>
</div>) : 
              (<div className="socialIcon">
                <div className="socialbox"><i className="fa-brands fa-facebook-f ic" /></div>
                <div className="socialbox"><i className="fa-brands fa-twitter ic" /></div>
                <div className="socialbox"><i className="fa-brands fa-instagram fa-xl ic" /></div>
                <div className="socialbox"><i className="fa-brands fa-youtube fa-lg ic" /></div>             
              </div>)}
            </div>
          </div>
          <div className="heroNav">
            <button className="toggle-btn">☰ Menu</button>
            <ul className="nav responsive">
              <li>
                <NavLink className="navitem" to='/home'>HOME</NavLink>
                <div className="bottom" />   
              </li>
              <li><NavLink className="navitem" to='/shop'>SHOP</NavLink><div className="bottom" /></li>
              <li><NavLink className="navitem" to='/women'>FEATURES</NavLink><div className="bottom" /></li>
              <li><NavLink className="navitem" to='/men'>MEGA GROUP</NavLink><div className="bottom" /></li>
              <li><NavLink className="navitem" to='/footer'>ABOUT</NavLink><div className="bottom" /></li>
              <li><NavLink className="navitem" to='/blog'>BLOG</NavLink><div className="bottom" /></li>
              <li>{user ? (<div><NavLink className="navitem" to='/contact'>CONTACT</NavLink><div className="bottom"/></div>) :<></>}
                
              </li>
              <li>
              {!user ? (<NavLink className="navitem" to='/login'>Sign In / Sign Up</NavLink>) :<NavLink className="navitem" to='/CartDisplay'><i class="fi fi-sr-shopping-cart"></i> Shopping Cart</NavLink>}
                
              </li>
            </ul>
            {/* <Header /> */}
          </div>

          <Routes>
            <Route path='/' element={<Home handleAddToCart={handleAddToCart}></Home>}></Route>
            <Route path='/home' element={<Home handleAddToCart={handleAddToCart}></Home>}></Route>
            <Route path='/men' element={<Men handleAddToCart={handleAddToCart} />} />

            <Route path='/women' element={<Women2 handleAddToCart={handleAddToCart}/>}></Route>
            <Route path='/shop' element={<Shop handleAddToCart={handleAddToCart}/>}></Route>
            <Route path='/blog' element={<BlogComponent user={user}/>}></Route>
            <Route path='/footer' element={<Footer></Footer>}></Route>
            <Route path='/contact' element={<Contact userdetails={userdetails}/>}></Route>
            <Route path='/login' element={<Login handleSignIn={handleSignIn} handleAddToCart={handleAddToCart}/>}></Route>
            <Route path='/CartDisplay' element={<CartDisplay cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart}/>} />
          </Routes>

          <Footers />
          <Copyrights />
        </div>
      </div>

      
    );
  }
export default App;