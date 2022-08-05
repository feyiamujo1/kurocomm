import React, { useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom"
import Logo from "../../images/logo.png"
import "./navbar.css"
import * as IoIcon from "react-icons/io5"
import * as HiIcon from "react-icons/hi"
// import Closebtn from "../../images/closebtn.png"
// import Openbtn from "../../images/menubtn.png"

function Nabvar() {
  var nav_link = document.getElementsByClassName('nav_link');
  for(var i =0; i < nav_link.length; i++ ){
    nav_link[i].style.display = "none";
  }
  function refreshPage() {
    window.location.reload(false);
  }
  const showSideBar = () => {
    document.getElementById("nav_links").style.width = "60%";
    document.getElementById("menubtn").style.display = "none";
    document.getElementById("closebtn").style.display = "block";
    for(var i =0; i < nav_link.length; i++ ){
      nav_link[i].style.display = "block";
    }
  }

  const screenWidth = window.innerWidth;
  const closeSideBar = () => {
    if (screenWidth < 900){
      document.getElementById("nav_links").style.width = "0%";
      document.getElementById("menubtn").style.display = "block";
      document.getElementById("closebtn").style.display = "none";
      for(var i =0; i < nav_link.length; i++ ){
        nav_link[i].style.display = "none";
      }
    }
  }

  let sideBarRef = useRef();
  
  //This will close the side bar if anywhere outside the side bar is clicked
  useEffect(() =>{
    let handler = (event) =>{
      if(!sideBarRef.current.contains(event.target))
      closeSideBar(); 
    };

    document.addEventListener("mousedown", handler);
    
     return () =>{
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo} alt="logo"/>
        </div>
        <ul ref={sideBarRef} id='nav_links' className="nav_links">
            <li onClick={{closeSideBar, refreshPage}} className='nav_link'><NavLink to="/" className="text_link" >Home</NavLink></li>
            <li onClick={{closeSideBar, refreshPage}} className='nav_link'><NavLink to="/about" className="text_link">About</NavLink></li>
            <li onClick={{closeSideBar, refreshPage}} className='nav_link'><NavLink to="/services" className="text_link">Services</NavLink></li>
            <li onClick={{closeSideBar, refreshPage}} className='nav_link'><NavLink to="/projects" className="text_link">Projects</NavLink></li>
            {/* <li><NavLink to="/blog" className="text_link">Clients</NavLink></li> */}
            <li onClick={{closeSideBar, refreshPage}}className='nav_link'><NavLink to="/contact" className="text_link">Contact</NavLink></li>
            {/* <li><NavLink to="/about" className="text_link">About</NavLink></li>
            <li><NavLink to="/contact" className="text_link">Contact</NavLink></li>*/}
        </ul>
        <div className='sidebar_control_container'>
            <IoIcon.IoMenu id='menubtn' onClick={showSideBar}/>
            <HiIcon.HiX id='closebtn' onClick={closeSideBar}/>
        </div>
    </div>
  )
}

export default Nabvar