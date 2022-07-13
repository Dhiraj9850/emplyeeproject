import React from 'react'
import logo from '../logoimg/logo.png'

const Header = () => {
  return (
    <div>
        <div className="container">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <h2 className="titlename">it's a delight to have you <span>onboard</span></h2>
            <p>Help us to know you better.</p>
            <p>(this is how we optimize wobot as per your buisness needs)</p>
            
        </div>
    </div>
  )
}

export default Header