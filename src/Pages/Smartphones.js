import React from 'react'
import SideFilter from '../components/SideFilter';
import Cart from '../components/Cart';
import { useEffect, useState } from 'react';
import { callBackendAPI } from '../service';
import { fetchSmartphones,setFilter, setPrice } from '../Slices/SmartphonesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filtItem,filtPrice } from '../service';

const Smartphones = () => {
    const [smart, setSmart] = useState(null)
    const [name,setName] =useState(null)
    const fil= useSelector(state=>{
        return state.smartphones.filterSmart
    })
    const smartphones=useSelector(state=>{
        
        let sm = state.smartphones
        console.log('price  ',sm.priceFilter);
        let bau=state.smartphones.smartphones
        if(sm.filterSmart.length>0 || sm.priceFilter){
            // console.log('сработало ',sm.smartphones,'asdsd ',sm.filterSmart);
        //   console.log(sm.smartphones)
        if(sm.filterSmart.length>0){
            bau= filtItem(sm.smartphones,sm.filterSmart)
        }
        if(sm.priceFilter){
            console.log('работает ',bau);
            bau= filtPrice(bau,sm.priceFilter)
        }
          
        
       return bau
        console.log('fffasdsad ',bau);
         
        }

        
            return sm.smartphones
        
       
    });
    
   
console.log(smartphones);
    
    const dispatch= useDispatch();
    const takePrice=(value)=>{
        console.log(value);
        dispatch(setPrice(value))
    }
    const takeFilter=(value)=>{
        console.log('value ', value);
        dispatch(setFilter(value))
    }
      useEffect(() => {
        dispatch(fetchSmartphones())
  
    }, [name])
    
   const filtSmart =(fil)=>{
       if(name){
           return fil[0]
       }
       return fil

   }
   const bbb= filtSmart(smartphones)
   

  
    return (
        <div className="container">
            <div className='gadget__wrap'>
                <SideFilter filterFunc={takeFilter} priceFunc={takePrice} />
                <div className="gadget__items">
                {smartphones && smartphones.map((item, i) => {
            return (
              <Cart key={i} name={item.name} price={item.price} img={item.img} id={item.id}/>
            )
          })}
                    
                </div>
            </div>
        </div>
    )
}
export default Smartphones