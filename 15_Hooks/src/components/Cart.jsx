
import { FaDollarSign } from "react-icons/fa";
import CartItem from "./CartItem.jsx";
function Cart({ cart, onUpdateQuantity, onRemove, total }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-5 w-full">
      <h2 className="text-2xl font-bold text-white mb-5">Shopping Cart</h2>
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
            <h3 className="text-white font-bold text-xl md:text-2xl flex items-center gap-0">Total:{""} <FaDollarSign/>{typeof total === String ? total:total.toFixed(2)}</h3>
            <button className="mt-4 rounded bg-green-600 font-bold  hover:bg-green-700 duration-200 px-3 py-2 text-white cursor-pointer">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
