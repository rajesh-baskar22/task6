import React from 'react'

function Navbar({openCart,cartCount}) {
  return (
    <nav className='p-5 bg-red-800 text-black flex justify-between items-center fixed w-full' >
        <h1 className='text-3xl font-bold '>Fake Store App</h1>
        <button onClick={openCart} className='bg-gray-600 text-white px-4 py-2 rounded-2zl font-bold'><i className="fa fa-cart-shopping "></i> Cart:{cartCount} </button>
         
    </nav>
  )
}

export default Navbar
