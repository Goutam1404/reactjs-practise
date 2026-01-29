import React from "react";
import CartItem from "./CartItem.jsx";
function Cart({ cart, onUpdateQuantity, onRemove, total }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
          <div>
            <h3>{typeof total === String ? total:total.toFixed(2)}</h3>
            <button >Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
