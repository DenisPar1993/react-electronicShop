import React from 'react'
import bigImg from '../assist/XiaomiBigImage-onepage.jpg'
import heart from '../assist/heart_icon.svg'

 const GadgetPage = () => {
  return (
    <div>
        <div className="container">
        <div className="title">Смартфон Xiaomi Poco X3 Pro 8/256Gb, синий</div>
        <div className="gadget__wrap">
            <div className="gadget-img"><img src={bigImg} alt="" /></div>
            <div className="gadget__descr">
                <div className="descr-title">Характеристики</div>
                   <div className="descr-wrap">
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Дисплей:</div>
                           <div className="descr-value__item">6.67", IPS</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Разрешение экрана:</div>
                           <div className="descr-value__item">2400x1080</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Процессор:</div>
                           <div className="descr-value__item">Qualcomm Snapdragon 860</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Количество ядер:</div>
                           <div className="descr-value__item">8</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Частота процессора:</div>
                           <div className="descr-value__item">2960МГц</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Объем оперативной памяти:</div>
                           <div className="descr-value__item">8ГБ</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Основная камера:</div>
                           <div className="descr-value__item">48МП</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Фронтальная камера:</div>
                           <div className="descr-value__item">20Мп</div>
                       </div>
                       <div className="descr-wrap__item">
                           <div className="descr-name__item">Ёмкость аккумулятора:</div>
                           <div className="descr-value__item">5160 мAч</div>
                       </div>

                   </div>
            </div>
            <div className="descr__cart-block">
            <div className="descr-title-price">Цена</div>
            <div className="descr__price">24990</div>
            <div className="descr__buttons">
                <button className='plus'>+</button>
                <button className='count'>0</button>
                <button className='minus'>-</button>
            </div>
            <div className="cart__button ">
                <img className='descr-heart' src={heart} alt="" />
            <button className='cart-button btn-desc'>В корзину</button>
            </div>
            </div>
        </div>

        </div>
       
    </div>
  )
}
export default GadgetPage