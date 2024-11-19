import React, { useEffect, useState } from 'react'

function ProductList({cartItems, setCartItems}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  
  },[]); 
    const addToCart =(product) =>{
        if (cartItems.find((item)=> item.id === product.id)){
          alert('Product Already in cart');
        }
        else{
          setCartItems ([...cartItems,product])
        }
       
    }
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-10'>
     
     {products.map((product)=>
     (
      <div key={product.id} className='border border-blue-300 p-2 rounded-lg shadow-lg bg-white mt-11'>
      <img src={product.image} alt={product.title} className='h-40 w-40 mx-auto mb-10'/>
      <h2 className='text-lg font-italic text-indigo-600'>{product.title}</h2>
      <p className='text-lg text-black-600 font-bold'>{product.price}</p>
      <button onClick={()=> addToCart(product)} className='bg-blue-400 text-white w-40 py-2 my-2 rounded-xl items-center'>Add To Cart</button>
     

      </div>
     ))}
    </div>
  )
}

export default ProductList
