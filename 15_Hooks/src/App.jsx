import React from "react";
import ProductCard from "./components/ProductCard.jsx";
import { productData } from "./data/productData.js";
import { useCart } from "./hooks/useCart.js";
import Cart from "./components/Cart.jsx";

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  // console.log(productData);

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-400 to-gray-600">
        <header className="">
          <h1 className="p-5 mx-10 h-fit text-center font-medium font-serif mb-4 text-4xl border-b-1 shadow">
            Shopping Cart
          </h1>
        </header>
        <main className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start lg:m-10">
          <div className="p-5 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
          {/*  cart, onUpdateQuantity, onRemove, total */}
            <div className=" p-5 lg:col-span-2 ">
              <Cart
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                total={total}
              />
            </div>
     
        </main>
      </div>
    </>
  );
}

export default App;
