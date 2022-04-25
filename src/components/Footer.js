import React from 'react'
import insta from '../assist/instagram.png';
import whatsup from '../assist/whatsap.png';
import telegram from '../assist/telegram.png'

 const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__wrap">
        <div className="footer__title">Smart-shop 2022</div>
        <div className="footer__social">
            <li><a className='social-pic' href=""><img src={whatsup} alt="" /></a></li>
            <li><a className='social-pic' href=""><img src={telegram} alt="" /></a></li>
            <li><a className='social-pic' href=""><img src={insta} alt="" /></a></li>
        </div>
        </div>
        </div>
    </div>
  )
}
export default Footer;