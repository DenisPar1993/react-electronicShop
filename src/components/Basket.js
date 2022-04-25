import React from 'react'
import phones from '../assist/iphone-cart.jpg'

const Basket = () => {
    return (
      <div className='container'>
    <div className="basket__item">
        <div className="basket__image"><img src={phones} alt="" /></div>
        <div className="basket__name">Смартфон Xiaomi Poco X3 Pro 8/256Gb, синий</div>
        <div className="descr__buttons">
            <button className='plus'>+</button>
            <button className='count'>0</button>
            <button className='minus'>-</button>
        </div>
        <div className="basket__price">2000руб</div>
    </div>

</div>
    )
}

export default Basket;
