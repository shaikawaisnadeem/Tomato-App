import React, { use } from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import ReactContext from '../../Context/Context'
const AppDownload = () => {
  const {toggleTheme} = use(ReactContext)
  return (
    <div className={toggleTheme ? 'app-downloadRight': 'app-download'} id='app-download'>
        <p>For Better Experience Download <br/>Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload