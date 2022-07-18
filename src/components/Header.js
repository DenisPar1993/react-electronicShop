import React, { useState,useEffect,useRef } from 'react';
import logo from '../assist/Logo.png';
import tel from '../assist/call-header.png';
import heart from '../assist/heart-header.png';
import cart from '../assist/cart-header.png'
import { Link,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
  const count = useSelector(state => state.basket.totalCount)
  const spanLink = useRef('/basket');
  console.log(spanLink.name);
  let history= useNavigate();
  const screenWidth = window.screen.width
  useEffect(()=>{
    if(screenWidth>800){
      setActiveMenu(true)
    }
  },[])
  console.log(screenWidth,'ширинаааа');
  const [activeMenu,setActiveMenu]=useState(false)
  const changeActive=()=>{
    setActiveMenu(!activeMenu)
  }
  const changePage= (e)=>{
    e.preventDefault();
    console.dir(e.target.name)
    if(activeMenu && screenWidth<800){
        setActiveMenu(false)
      history(e.target.name)
      
      
    }else{
      history(e.target.name)
    }
  }
  return (
    <>
    <div className='menu-fix'>
      <div className='container'>
        <div className="header-wrapper">
          <Link className='main-logo' name='/' to="/"  onClick={changePage}><img src={logo} alt="" /></Link>
          <a href=""><img src={tel} alt="" /> <span className='header-tel'>8-800-888-88-88</span> </a>
          <div className='basket-fav'>
            <Link  className='fav' name="/favorite" onClick={changePage} to="/favorite">

              <img name="/favorite" src={heart} alt="" />
            </Link>
            <Link className='header-cart' onClick={changePage} name={'/basket'} to="/basket"><img src={cart} alt="" name={'/basket'}  />
              {count > 0 && <div className='header-count cart-header'>{count}</div>}
              </Link> 
          </div>
        </div>
      </div>
      <nav className={activeMenu?'menu':'disactive'}>
        <div onClick={changeActive} className="burger">
          <span className={activeMenu?'active':''}></span>
        </div>
        <li 
        
        className={activeMenu?'active-list':'menu-list'}><Link onClick={changePage} className='menu__item' to="/"  name={"/"}>Главная</Link></li>
        <li 
        
        className={activeMenu?'active-list':'menu-list'}><Link onClick={changePage}  className='menu__item' to="/smartphones"  name={"/smartphones"}>Смартфоны</Link></li>
        <li 
        
        className={activeMenu?'active-list':'menu-list'}><Link onClick={changePage}  className='menu__item' to="/pads" name={"/pads"}>Планшеты </Link></li>
        <li 
        
        className={activeMenu?'active-list':'menu-list'}><Link onClick={changePage}  className='menu__item' to="/watch" name={"/watch"}>Смарт-часы</Link></li>
        <li 
        
        className={activeMenu?'active-list':'menu-list'}><Link onClick={changePage}  className='menu__item' to="/music" name={"/music"}>Наушники</Link></li>
      </nav>
      </div>


    </>
  )
}
export default Header