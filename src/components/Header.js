import React from 'react';
import logo from '../assist/Logo.png';
import tel from '../assist/call-header.png';
import heart from '../assist/heart-header.png';
import cart from '../assist/cart-header.png'
import { Link } from "react-router-dom";

 const Header = () => {
  return (
      <>
    <div className='container'>
        <div className="header-wrapper">
      <Link to="/"><img src={logo} alt="" /></Link>
      <a href=""><img src={tel} alt="" /> <span className='header-tel'>8-800-888-88-88</span> </a>
      <div>
      <a className='fav' href=""><img src={heart} alt="" /></a>
      <Link to="/basket"><img src={cart} alt="" /> <span className='header-tel__text'>Корзина</span></Link>
      </div>
      </div>
      </div>
      <nav className='menu'>
          <li><Link className='menu__item' to="/">Главная</Link></li>
          <li><Link className='menu__item' to="/smartphones">Смартфоны</Link></li>
          <li><Link className='menu__item' to="/pads">Планшеты </Link></li>
          <li><Link className='menu__item' to="/watch">Смарт-часы</Link></li>
          <li><Link className='menu__item' to="/music">Наушники</Link></li>
      </nav>
      
      
    
    </>
  )
}
export default Header