import React from 'react'
import SideFilter from '../components/SideFilter';
import Cart from '../components/Cart';
import { fetchPads } from '../Slices/PadSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { padFilter,padPrice } from '../Slices/PadSlice';
import { callBackendAPI } from '../service';
import { filtItem,filtPrice } from '../service';

 const Pads = () => {
   const pads=useSelector(state=>{
     let padArr= state.pads
     let resArr=state.pads.pads
     console.log('begin ',resArr);
     console.log(padArr);


    // let sm = state.smartphones
    // console.log('price  ',sm.priceFilter);
    // let bau=state.smartphones.smartphones
    if(padArr.filterPads.length>0 || padArr.priceFilter){
    if(padArr.filterPads.length>0){
      console.log('work  ',resArr);
        resArr= filtItem(padArr.pads,padArr.filterPads)
        
    }
    if(padArr.priceFilter){
        resArr= filtPrice(resArr,padArr.priceFilter)
    }
      
    
   return resArr
     
    }

    
        return padArr.pads
   })
   const dispatch =useDispatch();
   const [name,setName] =useState(null)
   const takePrice=(value)=>{
    console.log(value);
    dispatch(padPrice(value))
}
const takeFilter=(value)=>{
    console.log('value ', value);
    dispatch(padFilter(value))
}
      useEffect(() => {
        dispatch(fetchPads());
  
    }, [])
  return (
    <div className="container">
            <div className='gadget__wrap'>
                <SideFilter filterFunc={takeFilter} priceFunc={takePrice} />
                <div className="gadget__items">
                {pads && pads.map((item, i) => {
            return (
              <Cart key={i} name={item.name} price={item.price} img={item.img} />
            )
          })}
                    
                </div>
            </div>
        </div>
  )
}

export default Pads;
