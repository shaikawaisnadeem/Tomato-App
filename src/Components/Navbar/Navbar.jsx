import React, { use, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import ReactContext from '../../Context/Context';

const Navbar = ({setShowLogin}) => {
  const navi = useNavigate()
  const goHome = ()=>{
    navi('/')
  }
  const [menu, setMenu] = useState("home");
  const {cartTotalAmount,toggleTheme,setToggleRightFun} = use(ReactContext)

  return (
    <div className={toggleTheme ? 'navbarRight' : 'navbar'}>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className={toggleTheme ? "navbar-menu-right" : "navbar-menu"}>
            <Link onClick={() => { setMenu("home"); goHome; }} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact US</a>
        </ul>
        <div className="navbar-right">
            {/* <img src={assets.search_icon} alt=""/> */}
            <div className="navbar-search-icon">
               <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                <div className={cartTotalAmount()===0? '' : 'dot'}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
            <div onClick={setToggleRightFun} className='toggleTheme'>
              <div  className={toggleTheme? 'themeBallRight': 'themeBallLeft'}></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar