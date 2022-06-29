import React, { useState } from 'react'
import Basket from '../components/Basket';
import basket from '../assist/shopping-cart.png'
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import Modal from '../components/Modal';
import { clearBasket } from '../Slices/BasketSlice';

const EmptyBasket =()=>{

  return(
      <div className='empty-basket'>
      <div className='basket-title'>
      В корзине нет товаров
      </div>
      <div className='basket-empty__item'><img className='basket-img' src={basket}/></div>
      <div className='basket-empty__item'><button className='basket-button'><Link to="/">Вернуться на главную</Link></button></div>
      
      </div>
  )
}

const BasketPage = () => {
  const dispatch= useDispatch();
  const [order, setOrder]=useState(false)
  const bas=useSelector(state=>state.basket.basket)
  const count= useSelector(state=>state.basket.totalCount)
  const totalPrice= useSelector(state=>state.basket.totalPrice)
  ;
  const addedPage= Object.keys(bas).map((key)=>{
    return bas[key]
  })
  console.log('addedPage   ',addedPage);
  const closeModal=()=>{
    
    setOrder(false)
    dispatch(clearBasket())
  }
  const setActiveModal=()=>{
    setOrder(true)
    let timerId = setTimeout(()=>{
       setOrder(false)
       dispatch(clearBasket())
    },3000)
    timerId()
    
    if(!order){
      clearTimeout(timerId)
    }
  }

  
  return (
    <>
      <div className="container">
        <div className="title">Корзина</div>
        <div className="basket__wrap">
          {/* <EmptyBasket /> */}
          
          {count?<div className='basket__items'>{addedPage.map((item,i)=><Basket id={item.id} item={item} />)}</div>:<EmptyBasket/>}
          
          {count>0&&<div className="basket__order">
            <Modal active={order} closeModal={closeModal}/>
            <div className="basket__order-title">Итого</div>
            <div className="basket__order-count">Количество товара: <span>{count}шт</span></div>
            <div className="basket__order-summ">Итоговая сумма заказа: <span>{totalPrice}руб</span></div>
            <button onClick={setActiveModal} className='cart-button'>Оформить заказ</button>
          </div>}
        </div>
      </div>
    </>
  )
}
export default BasketPage;










// const arr={
//   1: [
//   {id: 1, name: 'Huawei Nova 8i 8i 6/128Gb', price: '40000', img: '/data/main/huawei-nova8i.jpg'},
//   {id: 1, name: 'Huawei Nova 8i 8i 6/128Gb', price: '40000', img: '/data/main/huawei-nova8i.jpg'},
//   {id: 1, name: 'Huawei Nova 8i 8i 6/128Gb', price: '40000', img: '/data/main/huawei-nova8i.jpg'},],
  
  
//   2: 
//   [ {id: 2, name: 'Samsung Galaxy S20 FE', price: '44000', img: '/data/main/galaxy-s20fe.jpg'},
//   {id: 2, name: 'Samsung Galaxy S20 FE', price: '44000', img: '/data/main/galaxy-s20fe.jpg'},
//   ],
  
//   3: 
//   [ {id: 3, name: 'Galaxy S21 Ultra 5G 128GB Purple', price: '53000', img: '/data/main/galaxy-s21-cart.jpg'},
//   {id: 3, name: 'Galaxy S21 Ultra 5G 128GB Purple', price: '53000', img: '/data/main/galaxy-s21-cart.jpg'},]
// }

// // console.log(Object.keys(arr));
// const ssss= Object.keys(arr).reduce((accum,key)=>{
//           console.log(accum,arr[key].length);
//   return +accum + (+arr[key].length*arr[key][0].price)
// },0)
// console.log(ssss);





