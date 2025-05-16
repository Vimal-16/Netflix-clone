import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube (1).png'
import twitter_icon from '../../assets/twitter.png'
import instagram_icon from '../../assets/instagram.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Terms of USe</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>cookie Preferences</li>
        <li>corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright-text'>Netflix Clone. All rights reserved. This is a student project and is not affiliated with Netflix Inc</p>
    </div>
  )
}

export default Footer