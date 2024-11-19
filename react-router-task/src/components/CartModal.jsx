import React, { useState } from 'react'

function CartModal({ closeCart,cartItems,removeCart,disc,discounts,addTotal,total,counting,count,setCount,decreasing,setDecrease,setCheck}) {

  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center' >
          <div className='bg-white p-6 rounded-lg w-full h-full  shadow-xl'>
           
            <h2 className='text-xl font-bold text-indigo-600 mb-4 text-center'> your Order List</h2>

              { cartItems.length > 0 ? (
                  <div>
                    {cartItems.map ((item)=> (
                       
                      <div key ={item.id} className='flex justify-between items-center mb-2 gap-4'>
                      
                        <img src={item.image} alt={item.title} className='h-12 w-12'/>
                        <div className='text-blue-500 w-80'>
                            {item.title}
                        </div>
                        <div className='text-blue-700 font-bold'> 
                          {item.price} 
                          
                          
                        </div>
                        
                        <button onClick={()=> removeCart(item.id,item.price)} onMouseOver={()=> discounts(total)} className='text--400 bg-yellow-300 p-2 rounded-full'>Delete</button>
                        
                        <div className='flex'>
                        <button className='bg-green-500 p-1 rounded-2xl' onClick={()=>counting(event.target.id)} id={count} > +</button>
                        <input className=' p-1 rounded-full bg-blue-500 w-8 text-center' id={`value${count}`} type="text" value={1} />
                         
                         
                         
                        
                        
                        {()=>setCount(count++)}
                        
                        <button className='bg-red-500 p-1 rounded-full' onClick={()=>decreasing(event.target.id)} id={count++}> -</button>
                        {()=>setDecrease(count)}
                        </div>
                        <button onClick={()=> addTotal(item.price)}  className='bg-zinc-700 p-2 rounded-xl text-white' onMouseOut={()=> discounts(total)}>Add Price</button>
                      </div>
                       
                    ))}
                   
                  </div>
              ):(<p className='text-gray-60'>Items Delete From List
              
              </p>)
              

              }
              <div className='flex justify-between' >
                <h3 className='text-blue-700 font-bold text-2xl'>Total</h3>
                <button className=' font-bold text-2xl' onMouseOver={()=> discounts(total)}>{total}</button>
                
              </div>
              <div className='flex justify-between'>
                <h3 className='text-blue-700 font-bold text-2xl'>Discount(10%)</h3>
                <button className=' font-bold text-2xl'>{disc}</button>
                
              </div>
              
            <button onClick={closeCart} className='mt-4 bg-red-500 text-white w-full py-2 rounded-full'>Close</button>
          </div>
    </div>
  )
}

export default CartModal

