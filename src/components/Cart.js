import React from 'react'
import cartImg from '../assist/iphone-cart.jpg'
import heart from '../assist/heart_icon.svg'
import like from '../assist/heart-like.svg'

 const Cart = ({name,img,price,id}) => {
   const takeName=()=>{
     const us={
       id:id
     }
     fetch('http://localhost:5000/cart',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(us)
     }).then(res=>res.json()).then(res=>console.log(res))
     
   }
  return (
    <div className='cart'>
       <img className='favorite' src={heart} alt="" /> 
      <a href=""><img className='cart-img' src={img} alt="" /></a>
      <div className="cart-text"><a href="">{name}</a> </div>
      <div className="cart-price">{price} Р</div>
      <button onClick={takeName} className='cart-button'>В корзину</button>
    </div>
  )
}
export default Cart