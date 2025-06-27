import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import ReactContext from './Context/Context'
import { food_list } from './assets/assets'
import Footer from './Components/Footer/Footer'

const App = () => {
  const foodValue = food_list
  const [eachCartItemsCount , seteachCartItemsCount ] = useState({})

  const addToCart = (itemId)=>{
     if (!eachCartItemsCount[itemId]){
      seteachCartItemsCount((prev)=>({...prev,[itemId]:1}))
     }
     else {
      seteachCartItemsCount((prev)=>({...prev,[itemId]:prev[itemId]+1}))
     }
  }
  const removeFromCart = (itemId) => {
  seteachCartItemsCount((oldCart) => {
    // Make a copy of the old cart
    const newCart = { ...oldCart };

    // If we have more than 1 of the item, take 1 away
    if (newCart[itemId] > 1) {
      newCart[itemId] = newCart[itemId] - 1;
    } 
    // If we only have 1 left, remove the item from the cart
    else {
       newCart[itemId] = 0;
    }

    // Give back the new cart
    return newCart;
  });
};



  return (
    <ReactContext value={{contextValue:foodValue, addToCart: addToCart, removeFromCart:removeFromCart, eachCartItemsCount:eachCartItemsCount}}>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </ReactContext>
  )
}

export default App