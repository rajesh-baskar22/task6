import  { useState } from 'react'
import  Navbar  from './components/Navbar'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';



function App() {
      const [cartItems,setCartItems] = useState([]);
      const[isCartOpen, setIsCartOpen] = useState(false);
      const [total, setTotal]=useState(0); 
      const [discount, setDiscount]=useState(0); 
      const [count, setCount]=useState([]);
      const [decrease, setDecrease]=useState([0]);
      const [check, setCheck]=useState([0]);
      const openCart = () =>{
            setIsCartOpen(true);
      };

      const closeCart =() =>{
        setIsCartOpen(false);
      };
      const removeCart =(productId,price) =>{  
        setTotal(total-price);
        setDiscount(total-price);
        setCartItems(cartItems.filter((item)=> item.id !== productId ))
      };
      const addTotal = (add) => {
        setTotal(total+(add*check));
        setDiscount(total-(total*10/100))
        }

      const discounts = (total) => {
        setDiscount(total-(total*10/100))
        
        }
        
      const counting = (cc) =>{ 
           
        console.log(cc); 
        if( count.filter((item)=> item == cc )){
          
          console.log(cc);
         
          var get=document.getElementById(`value${cc}`);
          get.value=Number(get.value)+1
          setCheck(get.value); 
        }  
      }
      
      const decreasing = (bc) =>{    
        console.log(bc); 
        if( decrease.filter((item)=> item == bc )){
          
          console.log(bc);

          var get=document.getElementById(`value${bc}`);
          get.value=Number(get.value)-1;
          // setCheck(get.value);   
        }  
      }
      
  return (
    <Router>
     
      {console.log(event.target.id)};
      <nav className='p-4 bg-pink-400 text-white'>
        <ul className='flex space-x-4'>
          <li> <Link to="/Home">Home</Link></li>
          <li> <Link to="/Products">Product</Link></li>
          <li> <Link to="/CartModal">CartModal</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/CartModal' element={<div>
          {()=>openCart}
          <Navbar cartCount={cartItems.length} openCart ={openCart} />
         
       
         {
             isCartOpen && (
              <CartModal cartItems={cartItems} closeCart={closeCart} removeCart={removeCart} discounts={discounts} disc={discount} addTotal={addTotal}  total={total} counting={counting} decreasing={decreasing} count={count} setCount={setCount} setDecrease={setDecrease} setCheck={setCheck} />
             )    
         }
        </div>
      }>
        
      </Route>
        <Route path='/products' element={<div>
          {()=>closeCart}
          <Navbar cartCount={cartItems.length} openCart ={openCart} />
         <ProductList cartItems={cartItems} setCartItems={setCartItems} />
       
         {
             isCartOpen && (
              <CartModal cartItems={cartItems} closeCart={closeCart} removeCart={removeCart} discounts={discounts} disc={discount} addTotal={addTotal}  total={total} counting={counting} decreasing={decreasing} count={count} setCount={setCount} setDecrease={setDecrease} setCheck={setCheck} />
                    )
         }
        </div>
      }></Route>
      </Routes>
    </Router>
  
  )
}

export default App

