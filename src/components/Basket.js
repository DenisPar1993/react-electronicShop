import React from 'react'
import phones from '../assist/iphone-cart.jpg'
import del from '../assist/delete_garbage.png'
import { useState, useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { plusCountBasket,minusCountBasket,deleteItemBasket} from '../Slices/BasketSlice'





const Basket = ({item,id}) => {
    // const [count,setCount]=useState(1)
    const count=useSelector(state=>state.basket.basket[item[0].id].length)
    // const www= useSelector(state=>state.basket.basket[])
// console.log('count ',www.length);
console.log('basket       aswdas ', item);
   
    useEffect(()=>{
        // if(count<2){
        //     dispatch(plusCountAll()) 
        // }
       
    },[])

    const dispatch=useDispatch()
    
   console.log(item);
   const plusCount=(id)=>{
    //  console.log('asdasdaaaaaaaaa  ',id);
      dispatch(plusCountBasket(id))
   }
   const minusCount=(id)=>{
     console.log('minus  ',id);
      dispatch(minusCountBasket(id))
   }
//    const minusCount=()=>{
//        if(count>1){
//         setCount(count-1)
//         dispatch(minusCountAll())
//     }
//        }

   const delBasket=(id)=>{
       dispatch(deleteItemBasket(id))
   }    
    
    return (
        
                <div className="basket__item">
                <div className="basket__image"><img src={item[0].img} alt="" /></div>
                <div className="basket__name">{item[0].name}</div>
                <div className="descr__buttons">
                    <button onClick={()=>plusCount(item[0].id)}  className='plus'>+</button>
                    <div className='count'>{count}</div>
                    <button  className='minus' onClick={()=>minusCount(item[0].id)}>-</button>
                </div>
                <div className="basket__price">{count*item[0].price}руб</div>
                <img onClick={()=>delBasket(item[0].id)} className='delete-item' src={del}/>
            </div>
            
    

    )
}

export default Basket;
