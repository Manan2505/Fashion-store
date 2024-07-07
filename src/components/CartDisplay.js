import React from 'react';
import './cartcss.css';
import { useNavigate } from 'react-router-dom';
const CartDisplay = ({ cartItems, handleRemoveFromCart }) => {
  const navigate = useNavigate();

  // Check if cartItems is undefined or null
  if (!cartItems || cartItems.length === 0) {
    return<div class="empty-cart">
              <img src={require("../assets/cartempty.png")} alt="Empty cart with a bold graphic" />
              <h2>Cart's Empty? Fill it with FIRE!</h2>
              <p>Shop our hottest picks and unleash your shopping spree.</p>
              <button onClick={()=>{navigate('/shop');}}>Shop the  now</button>
          </div>;
        }

  // Create a map to group items by id
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((groupedItem) => groupedItem.heading === item.heading);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
  
    return acc;
  }, []);
  

  // Calculate total price
  const totalPrice = groupedItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cartDisplay">
      <h2>Cart Items</h2>
      <ul>
        {groupedItems.map((item) => (
          <li key={item.id}>
            <div className='bth'>
              <img src={`/assets/${item.image}`} alt={item.heading} />
              <div>
                <h5>{item.heading}</h5>
                <p>Price per item: ₹{item.price}</p>
              </div>
            </div>
            <div>
              <button onClick={() => handleRemoveFromCart(item.heading)}>
                Remove from Cart
              </button>
              <p>Quantity: {item.quantity}</p>
            </div> 
           
          </li>
        ))}
      </ul>
      <p className='totalprice'>Total Price: ₹{totalPrice}</p>
    </div>
  );
};

export default CartDisplay;
