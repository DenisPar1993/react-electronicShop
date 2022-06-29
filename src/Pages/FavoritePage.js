import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';


const EmptyFavorite =()=>{

    return(
        <div className='empty-favorite'>
         
        <div className='favorite-title'>
         Нет товаров
        </div>
        <div className='favorite-empty__item'><button className='favorite-button'><Link to="/">Вернуться на главную</Link></button></div>
        </div>
       
    )
  }

 const FavoritePage = () => {
   const favorite = useSelector(state=>state.favorite.favorite)
   const check=Object.keys(favorite).length
   const addedPage= Object.keys(favorite).map((key)=>{
    return favorite[key]
  })
   console.log(favorite);
  return (
    <div className='container'>
        <div className="title">Избранное</div>
        <div className='favorite-wrap'>
        {check?<div className='favorite__items'>{addedPage.map((item,i)=><Cart key={i} fav={favorite[item.id]} name={item.name} price={item.price} img={item.img} id={item.id}/>)}</div>:<EmptyFavorite/>}
        </div>
        
        
        </div>
  )
}

export default FavoritePage;
