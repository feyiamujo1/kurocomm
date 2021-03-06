import React from 'react';
import "./contactcomp.css";
import EmailIcon from "../../images/emailIcon.png";
import LocationIcon from "../../images/location.png";
import PhoneIcon from "../../images/phone.png";
import styled from 'styled-components';

const ContactCompContainer = 
  styled.div`
    padding-top: ${(props) => props.pt};
    background-color: ${(props) => props.bg}
`

function Contactcomp(props) {
  return (
    <ContactCompContainer pt ={props.pt} bg={props.bg} className='contact_component'>
        <div className='contact_container'>
            <div className='address_container'>
                <h2>Contact Us</h2>
                <h1>We are always here to support your business</h1>
                <p>Please feel free to contact us with any enquiries you may have.</p>
                <div className='email_container'><img src={EmailIcon} alt="emailIcon"/> <p>info@kurocomm.com</p></div>
                <div className='location_container'><img src={LocationIcon} alt="locationIcon"/> <p>Kuro Communications
                Suit 115 Bahamas Plaza
                Plot 1080 Joseph Gomwalk Street
                Gudu - Abuja | Nigeria.</p></div>
                <div className='phone_container'>
                  <img src={PhoneIcon} alt="PhoneIcon"/>
                  <p>+234 (0) 803 200 4138</p>
                </div>
            </div>
            <div className='form_container'>
              <form>
                <div className='input_container'>
                  <div class="user_box">
                    <input type='text' id='firstname_inputfield' required/>
                    <label>First Name</label>
                  </div>
                  <div class="user_box">
                    <input type='text' id='lastname_inputfield' required/>
                    <label>Last Name</label>
                  </div>
                </div>
                <div className='input_container'>
                  <div class="user_box">
                    <input type='email' id='email_inputfield' required/> 
                    <label>Email</label>
                  </div>
                  <div class="user_box">
                    <input type='tel' id='tel_inputfield' required/>
                    <label>Phone Number</label>
                  </div>
                </div>
                <div className='user_box other_container'>
                  <input type='text' id='subject_inputfield' required/> 
                  <label>Subject</label>
                </div>
                <div className='user_box other_container'>
                  <textarea required id='message_textarea'/> 
                  <label>Message</label>
                </div>
                <input type="button" id='send_message_button' value="Send Message"/>
              </form>
            </div>
        </div>
    </ContactCompContainer>
  )
}

export default Contactcomp