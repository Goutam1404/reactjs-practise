import { FaShoppingCart, FaDollarSign } from "react-icons/fa";
function ProductCard({product, onAddToCart}) {
  // console.log(product.name);
  
  return (
    <div className="h-full bg-gray-800 px-4 py-5 rounded-xl shadow-md hover:-translate-y-0.5 duration-200 ">
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-white mb-1 text-wrap">{product.name}</h3>
        <p className="text-blue-400 text-lg font-bold flex flex-row items-center">
          <FaDollarSign />
          {product.price}
        </p>
      <button
        className="bg-blue-500 max-w-fit rounded px-2 py-1 mt-4 cursor-pointer hover:bg-blue-600 flex items-center gap-1 duration-200 border-none"
        onClick={() => onAddToCart(product)}
      >
        {" "}
        <FaShoppingCart /> Add to cart
      </button>
      </div>
    </div>
  );
}

export default ProductCard