import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'; // Import your component-specific CSS file

export default function Login({handleSignIn}) {

  function abc(){
    navigate('/');
  }
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/signup', {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        address: userData.address,
        phoneNumber: userData.phoneNumber,
      });

      alert(response.data); // Assuming the server sends a message like 'Signup successful'
    } catch (error) {
      alert('User already exists or wrong information');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:4000/login', {
        email: userData.email,
        password: userData.password,
      });
      handleSignIn(response.data.user);
      // alert("login succesfull");
      navigate('/');
    }
     catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid credentials');
      } else {
        alert(error);
      }
    }
  };
  

  return (
    <div className='log' id='logpage'>
      <div className="logmain">
        <button className="close-button" onClick={abc}>&#10006;</button>
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
        <form onSubmit={handleSignup}>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="firstName" placeholder="First name" required="" onChange={handleInputChange} />
          <input type="text" name="lastName" placeholder="Last name" required="" onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" required="" onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password" required="" onChange={handleInputChange} />
          <input name="address" placeholder="Address" onChange={handleInputChange}/>
          <input type="tel" name="phoneNumber" placeholder="Phone number" onChange={handleInputChange} />
          <button type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">Sign in</label>
            <input type="email" name="email"  placeholder="Email" required="" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" required="" onChange={handleInputChange} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
