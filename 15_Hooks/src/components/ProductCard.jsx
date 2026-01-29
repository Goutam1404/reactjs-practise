import {FaShoppingCart} from 'react-icons/fa'
function ProductCard({product, onAddToCart}) {
  // console.log(product.name);
  
  return (
    <div className='m-auto bg-gray-700 p-5 rounded-xl shadow-md hover:-translate-y-1 duration-200'>
      <h3 className='text-white mb-1 text-wrap'>{product.name}</h3>
      <p className='text-white'>{product.price}</p>
      <button className='bg-blue-400 rounded px-2 py-1 mt-4 cursor-pointer hover:bg-blue-500 flex items-center gap-1 duration-200' onClick={()=>onAddToCart(product)}> <FaShoppingCart/> Add to cart</button>
    </div>
  )
}

export default ProductCard