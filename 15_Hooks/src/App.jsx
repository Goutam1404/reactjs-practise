import React from "react";
import ProductCard from "./components/ProductCard.jsx";
import {productData} from "./data/productData.js"
import {  useCart} from "./hooks/useCart.js"

function App() {
  const {  cart, addToCart, removeFromCart, updateQuantity, total}=useCart(); 
  // console.log(productData);
  
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-400 to-gray-600">
        <header className="">
          <h1 className="p-5 h-fit text-center font-light mb-4 text-4xl underline shadow-md hover:font-medium duration-200 transition-all">
            Shopping Cart
          </h1>
        </header>
        <main>
          <div className="min-w-full flex flex-wrap gap-2">
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
