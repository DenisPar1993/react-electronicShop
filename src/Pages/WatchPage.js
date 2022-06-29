import React, { useState } from 'react'
import bigImg from '../assist/XiaomiBigImage-onepage.jpg'

import heart from '../assist/heart_icon.svg'
import like from '../assist/heart-like.svg'
import { useParams } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { fetchGadget } from '../Slices/GadgetSlice'
import { useEffect } from 'react'
import { basketAdd } from '../Slices/BasketSlice'
import { addFavorite } from '../Slices/FavoriteSlice'


 const WatchPage = () => {
     const dispatch=useDispatch()
     const gadget=useSelector(state=>state.gadget.gadget)
     const favorite = useSelector(state=>state.favorite.favorite)
     const loading = useSelector(state=>state.gadget.loading)
    const error = useSelector(state=>state.gadget.error)
     console.log(gadget);
     const {id}=useParams()
     console.log(id);
     useEffect(()=>{
      dispatch(fetchGadget(id))
     },[id])
     const changeFavorite=()=>{
        const us={
          id:gadget.id,
          name:gadget.name,
          price:gadget.price,
          img:gadget.img
        }
        dispatch(addFavorite(us))
      }

     const takeName=()=>{
        const us={
          id:gadget.id,
          name:gadget.name,
          price:gadget.price,
          img:gadget.img
        }
        dispatch(basketAdd(us))
      }
  return (
    <div>
        <div className="container">
        {error&&<ErrorMessage/>}
            {loading&&<Spinner/>}
            {!(loading||error)&&gadget&&<div>
        <div className="title">{gadget.name}</div>
        <div className="gadget-one__wrap">
           
            <div className="gadget-img"><img src={gadget.bigimg} alt="" /></div>
            <div className="gadget__descr">
                <div className="descr-title">Характеристики</div>
                   <div className="descr-wrap">
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Дисплей:</div>
                           <div className="descr-value__item">{gadget.characteristics.display}</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Разрешение экрана:</div>
                           <div className="descr-value__item">{gadget.characteristics.screenResolution}</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Подключение:</div>
                           <div className="descr-value__item">{gadget.characteristics.connect}</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Объем оперативной памяти:</div>
                           <div className="descr-value__item">{gadget.characteristics.ram}</div>
                       </div>
                      
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Ёмкость аккумулятора:</div>
                           <div className="descr-value__item">{gadget.characteristics.accumulator}</div>
                       </div>

                   </div>
            </div>
            <div className="descr__cart-block">
            <div className="descr-title-price">Цена</div>
            <div className="descr__price">{gadget.price}</div>
            
            <div className="cart__button ">
            <svg onClick={changeFavorite}  className='descr-heart' width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">

<path strokeWidth={1} stroke={favorite[gadget.id]?"none":"#000"} d="M38.2384 3C45.2898 3 51 8.64657 51 15.6072C51 28.2144 38.2384 35.3927 25.4931 48C12.7465 35.3927 0 28.2144 0 15.6073C0 8.64669 5.71014 3.00012 12.7465 3.00012C19.1191 3.00012 22.3061 6.1522 25.4931 12.4552C28.6787 6.1522 31.8657 3 38.2384 3Z" fill={favorite[gadget.id]?"red":'none'}/>
</svg>
            <button onClick={takeName} className='cart-button btn-desc'>В корзину</button>
            </div>
            </div>
        </div>

        </div>}
        </div>
    </div>
  )
}
export default WatchPage