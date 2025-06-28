import React, { use } from 'react'
import './Placeorder.css'
import ReactContext from '../../Context/Context'
const Placeorder = () => {
  const {cartTotalAmount,toggleTheme} = use(ReactContext)
  return (
    <form className={toggleTheme? "place-orderright":'place-order'}>
      <div className={toggleTheme? "place-order-leftRight":"place-order-left"}>
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
         <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
          <div className={toggleTheme? "cart-totalRight" : "cart-total"}>
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
      </div>
    </form>
  )
}

export default Placeorder