import React from "react";
import { FaTrash, FaMinus, FaPlus, FaDollarSign } from "react-icons/fa";
function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="border-b mb-4">
      <div className="pb-4 ">
        <h4 className="text-white font-medium">{item.name}</h4>
        <div className="flex justify-between items-center my-2">
          <p className="text-white flex items-center">
            <FaDollarSign />
            {item.price}
          </p>
          <button className="text-white cursor-pointer hover:text-lg duration-200 hover:text-red-400" onClick={() => onRemove(item.id)}>
            <FaTrash />
          </button>
        </div>
        <div className="">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="rounded-full p-1 bg-white cursor-pointer hover:bg-blue-500 hover:text-gray-800"
          >
            <FaMinus />
          </button>
          <span className="text-white mx-4">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="rounded-full p-1 bg-white cursor-pointer hover:bg-blue-500 hover:text-gray-800"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
