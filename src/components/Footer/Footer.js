import React from 'react';
import "./footer.css";
import Logo from "../../images/logo.png";
import {Link} from "react-router-dom";
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
            <Link to="/">
              <img src={Logo} alt="logo"/>
            </Link>
            <div className='news_letter_container'>
              <h3>Subscribe to our NewsLetter</h3>
              <p>Stay current with our latest insights on selected <br className='breaker'></br> topics</p>
              <form>
                <input type="email" placeholder='Email'/>
                <button className='submit_newsletter_button' type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className='footer_link_container'>
            <p>Quick Links</p>
            <ul className='footer_nav'>
              {/* <li><NavLink to="/" className="footer_link" >Home</NavLink></li> */}
              <li><Link to="/about" className="footer_link">About</Link></li>
              <li><Link to="/services" className="footer_link">Services</Link></li>
              <li><Link to="/projects" className="footer_link">Projects</Link></li>
              {/* <li><NavLink to="/blog" className="footer_link">Clients</NavLink></li> */}
              <li><Link to="/contact" className="footer_link">Contact</Link></li>
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