import React, { use } from 'react'
import './ItemCard.css'
import ReactContext from '../../Context/Context'
import FoodItem from '../FoodItem/FoodItem'
const ItemCard = ({category}) => {
      const {listOfItems} = use(ReactContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {listOfItems.map((item,index)=>{
          if (category==="All" || category===item.category){
          return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default ItemCard