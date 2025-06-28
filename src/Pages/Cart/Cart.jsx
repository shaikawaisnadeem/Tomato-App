import React, { use } from 'react'
import './Cart.css'
import ReactContext from '../../Context/Context'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {listOfItems,eachCartItemsCount,removeFromCart,cartTotalAmount, toggleTheme}  = use(ReactContext);
  const navigate = useNavigate()
  return (
    <div className='cart'>
        <div className="cart-items">
          <div className="cart-items">
            <div className={toggleTheme?"cart-items-titleRight":"cart-items-title"}>
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br/>
            <hr/>
            {listOfItems.map((item,index)=>{
                if (eachCartItemsCount[item._id]>0){
                  return(
                    <div key={index}>
                    <div  className={toggleTheme ? "cart-items-titleRight cart-items-itemRight": 'cart-items-title cart-items-item'}>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{eachCartItemsCount[item._id]}</p>
                        <p>${item.price*eachCartItemsCount[item._id]}</p>
                        <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                    </div>
                    <hr/>
                    </div>
                  )
                }
            })}
          </div>
        </div>
        <div className="cart-bottom">
          <div className={toggleTheme? "cart-totalRight": "cart-total"}>
            <h2>Cart Totals</h2>
            <div>
              <div className={toggleTheme? "cart-total-detailsRight": "cart-total-details"}>
                <p>Subtotal</p>
                <p>${cartTotalAmount()}</p>
              </div>
              <hr/>
              <div className={toggleTheme? "cart-total-detailsRight": "cart-total-details"}>
                <p>Delivery Fee</p>
                <p>${cartTotalAmount()===0? 0 : 18}</p>
              </div>
              <hr/>
              <div className={toggleTheme? "cart-total-detailsRight": "cart-total-details"}>
                <b>Total</b>
                <b>${cartTotalAmount()===0 ? 0 : cartTotalAmount()+18}</b>
              </div>
              <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
          </div>
          <div className={toggleTheme ? "cart-promocodeRight" : "cart-promocode"}>
            <div>
              <p>If you have a promo code, Enter It Here</p>
              <div className="cart-promo-code-input">
                <input type="text" placeholder='Promo Code'/>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart