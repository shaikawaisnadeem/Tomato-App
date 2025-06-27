import React, { use  } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import ReactContext from '../../Context/Context'

const FoodItem = ({id, name, price, description, image}) => {
    const {eachCartItemsCount, addToCart, removeFromCart} = use(ReactContext)
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img src={image} className='food-item-image' alt="" />
            {!eachCartItemsCount[id] ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/> :
             <div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
                <p>{eachCartItemsCount[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
            </div>}
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}/>
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>$ {price}</p>
        </div>
    </div>
  )
}

export default FoodItem