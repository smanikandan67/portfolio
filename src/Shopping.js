import React, { useState } from "react";
import "./Shopping.css";

function SmartShoppingCart() {
  const [item, setItem] = useState({
    id: 1,
    title: "Wireless Mouse",
    price: 500,
    qty: 1
  })

  const [isMember, setIsMember] = useState(true);
  const { title, price, qty } = item;
  const increaseQty = () => {
    setItem({
      ...item,
      qty: item.qty + 1
    })
  }
  const decreaseQty = () => {
    if (item.qty > 1) {
      setItem({
        ...item,
        qty: item.qty - 1
      })
    }
  }

  const toggleMembership = () => {
    setIsMember(!isMember);
  }
  const finalPrice = isMember ? price * 0.90 : price;

  return (
    <div className="cart-container">
      <h2>{title}</h2>
      <p>Original Price: ₹{price}</p>

      
      <p>
        Final Price: ₹{finalPrice}
        {isMember ? " (Member Discount Applied)" : ""}
      </p>
      <div className="qty-controls">
        <button onClick={decreaseQty}>-</button>
        <span>{qty}</span>
        <button onClick={increaseQty}>+</button>
      </div>
      {qty > 5 && <p className="badge">Free Shipping!</p>}
      <button className="member-btn" onClick={toggleMembership}>
        Toggle Membership ({isMember ? "Member" : "Non-Member"})
      </button>

    </div>
  )
}

export default SmartShoppingCart;