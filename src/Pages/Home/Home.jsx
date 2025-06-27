import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import ItemCard from '../../Components/ItemCard/ItemCard'
import AppDownload from '../../Components/AppDownload/AppDownload'
const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <ItemCard category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home