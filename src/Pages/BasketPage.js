import React from 'react'
import Basket from '../components/Basket';

const BasketPage = () => {
  return (
    <>
      <div className="container">
        <div className="title">Корзина</div>
        <div className="basket__wrap">
          <Basket />
          <div className="basket__order">
            <div className="basket__order-title">Итого</div>
            <div className="basket__order-count">Количество товара: <span>3шт</span></div>
            <div className="basket__order-summ">Итоговая сумма заказа: <span>2000руб</span></div>

            <button className='cart-button'>Оформить заказ</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default BasketPage;