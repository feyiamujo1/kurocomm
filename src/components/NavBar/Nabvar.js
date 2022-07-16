import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from "../../images/logo.png"
import "./navbar.css"
import * as IoIcon from "react-icons/io5"
import * as HiIcon from "react-icons/hi"
// import Closebtn from "../../images/closebtn.png"
// import Openbtn from "../../images/menubtn.png"

function Nabvar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo} alt="logo"/>
        </div>
        <ul className="nav_links">
            <li><NavLink to="/" className="text_link" >Home</NavLink></li>
            <li><NavLink to="/about" className="text_link">About</NavLink></li>
            <li><NavLink to="/services" className="text_link">Services</NavLink></li>
            <li><NavLink to="/project" className="text_link">Projects</NavLink></li>
            {/* <li><NavLink to="/blog" className="text_link">Clients</NavLink></li> */}
            <li><NavLink to="/contact" className="text_link">Contact</NavLink></li>
            {/* <li><NavLink to="/about" className="text_link">About</NavLink></li>
            <li><NavLink to="/contact" className="text_link">Contact</NavLink></li>*/}
        </ul>
        <div className='sidebar_control_container'>
            <IoIcon.IoMenu id='menubtn'/>
            <HiIcon.HiX id='closebtn'/>
        </div>
    </div>
  )
}

export default Nabvar