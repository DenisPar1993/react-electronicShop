import React, { useEffect, useState } from 'react'
import cartImg from '../assist/iphone-cart.jpg'
import heart from '../assist/heart_icon.svg'
import like from '../assist/heart-like.svg'
import { basketAdd } from '../Slices/BasketSlice'
import { addFavorite } from '../Slices/FavoriteSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

 const Cart = ({name,img,price,id,fav,group}) => {
  // const fav=useSelector(state=>state.favorite.favorite[id])
  // const [fav,setFav]=useState(false)
 console.log(fav,id,'  favorite');

  const changeFavorite=()=>{
    const us={
      id,
      name,
      price,
      img
    }
    dispatch(addFavorite(us))
  }
  
  // console.log('favorite  ',fav);
   const dispatch =useDispatch()
   const takeName=()=>{
     const us={
       id,
       name,
       price,
       img
     }
     dispatch(basketAdd(us))
   }
  
  return (
    <div className='cart'>
        {/* <img onClick={changeFavorite} className='favorite' src={fav?like:heart} alt="" />   */}
        <svg onClick={changeFavorite}  className='favorite' width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">

<path strokeWidth={1} stroke={fav?"none":"#000"} d="M38.2384 3C45.2898 3 51 8.64657 51 15.6072C51 28.2144 38.2384 35.3927 25.4931 48C12.7465 35.3927 0 28.2144 0 15.6073C0 8.64669 5.71014 3.00012 12.7465 3.00012C19.1191 3.00012 22.3061 6.1522 25.4931 12.4552C28.6787 6.1522 31.8657 3 38.2384 3Z" fill={fav?"red":'none'}/>
</svg>
       {/* <svg  className='favorite' height="52px" version="1.1" width="52px" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#"  xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path strokeWidth="1px" stroke='none' d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#c0392b" /></g></svg> */}
       {/* <svg  width="52" height="52" viewBox="0 0 52 52" fill="green" xmlns="http://www.w3.org/2000/svg">
<path strokeWidth={2} stroke="#000" d="M34.6125 9.99375C39.7617 9.99375 43.9461 14.1883 43.9461 19.368C43.9461 22.0289 42.8391 24.4258 41.0719 26.132L26 41.3461L10.6641 25.8578C9.05938 24.1719 8.06406 21.8867 8.06406 19.368C8.06406 14.1883 12.2383 9.99375 17.3977 9.99375C21.2773 9.99375 24.5984 12.3703 26.0102 15.7625C27.4016 12.3805 30.7328 9.99375 34.6125 9.99375ZM34.6125 8.42969C31.1797 8.42969 28.0312 10.0344 26 12.675C23.9688 10.0344 20.8203 8.42969 17.3875 8.42969C11.3852 8.42969 6.5 13.3352 6.5 19.368C6.5 22.2016 7.57656 24.893 9.53672 26.9445L24.893 42.4531L26 43.5703L27.107 42.4531L42.1688 27.2391C44.3016 25.1773 45.5 22.3742 45.5 19.368C45.5 13.3352 40.6148 8.42969 34.6125 8.42969Z" fill="#c0392b"/>
</svg> */}
      <Link to={`/${group}/${id}`} ><img className='cart-img' src={img} alt="" /></Link>
      <div className="cart-text"><a href="">{name}</a> </div>
      <div className="cart-price">{price} Р</div>
      <button onClick={takeName} className='cart-button'>В корзину</button>
    </div>
  )
}
export default Cart

//fill="#c0392b"
//fill="#FF7979"