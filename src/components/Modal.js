import React from 'react'
import check from '../assist/checkmark.png'

 const Modal = ({active,closeModal}) => {
  return (
    <div className={active?'modal active':'modal'} onClick={closeModal}>
        <div onClick={e=>e.stopPropagation()} className={active?'modal__content active':'modal__content'}>
        <div>Ваш заказ успешно обработан </div>
        <div><img src={check} alt="" /></div>
         </div>
        
    </div>
  )
}

export default Modal
