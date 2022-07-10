import React from 'react';
import "./footer.css";
import Logo from "../../images/logo_footer.png";
import {NavLink} from "react-router-dom";
import FacebookIcon from "../../images/facebookicon.png";
import TwitterIcon from "../../images/twittericon.png";
import LinkedInIcon from "../../images/linkedinicon.png";
import InstagramIcon from "../../images/igicon.png";
// import InstagramIcon from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <div className='footer_top'>
          <div className='footer_logo_container'>
            <img src={Logo} alt="logo"/>
            <div className='news_letter_container'>
              <h3>Subscribe to our NewsLetter</h3>
              <p>Stay current with our latest insights on selected <br></br> topics</p>
              <form>
                <input type="email" placeholder='Email'/>
                <input type="submit"/>
              </form>
            </div>
          </div>
          <div className='footer_link_container'>
            <p>Quick Links</p>
            <ul className='footer_nav'>
              {/* <li><NavLink to="/" className="footer_link" >Home</NavLink></li> */}
              <li><NavLink to="/about" className="footer_link">About</NavLink></li>
              <li><NavLink to="/services" className="footer_link">Services</NavLink></li>
              <li><NavLink to="/project" className="footer_link">Project</NavLink></li>
              <li><NavLink to="/blog" className="footer_link">Clients</NavLink></li>
              {/* <li><NavLink to="/contact" className="footer_link">Contact</NavLink></li> */}
            </ul>
            <div className='socials'>
              <div><img src={FacebookIcon} alt='socials'/></div>
              <div><img src={TwitterIcon} alt='socials'/></div>
              <div><img className='smallericon' src={InstagramIcon} alt='socials'/></div>
              <div><img className='smallericon' src={LinkedInIcon} alt='socials'/></div>
            </div>
          </div>
        </div>
        <div className='copyright_container'><p> &copy; 2022 Kuro Communications Limited. All Rights Reserved</p></div>
      </div>
    </div>
  )
}

export default Footer