import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import ReactContext from './Context/Context'
import { food_list } from './assets/assets'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
  const listOfItems = food_list
  // console.log(foodValue)
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
const getTotalCartAmount = ()=>{
  let totalAmount = 0;
  for(const item in eachCartItemsCount){
    if (eachCartItemsCount[item]>0){
    let itemInfo = listOfItems.find((product)=>product._id===item);
    totalAmount+= itemInfo.price * eachCartItemsCount[item];
    }
  } 
  return totalAmount
}
  const [toggleRight, setToggleRight] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const setToggleRightFun = ()=>{
    setToggleRight(prev=>!prev)
  }
  return (
    <ReactContext value={{toggleTheme:toggleRight,setToggleRightFun:setToggleRightFun, listOfItems:listOfItems, addToCart: addToCart, removeFromCart:removeFromCart, eachCartItemsCount:eachCartItemsCount,cartTotalAmount:getTotalCartAmount}}>
      {showLogin? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className={toggleRight? 'app-right' : 'app'}>
      <div className='adjust-width'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
         
      </div>
    </div>
    <Footer/>
    </ReactContext>
  )
}

export default App