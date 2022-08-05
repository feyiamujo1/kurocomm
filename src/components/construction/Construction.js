import React from 'react'
import { NavLink } from 'react-router-dom'
import "./construction.css"
import caution_image from "../../images/caution.png"

function Construction() {
  return (
    <div className='construction_comp'>
      <div>
        <img src={caution_image} alt="caution"/>
      </div>
      <div>
        <h1>
          coming
          <br></br>
          Soon!
        </h1>
        <p>This page is under construction</p>
        <p><NavLink to="/">Go Home</NavLink></p>
      </div>

    </div>
  )
}

export default Construction