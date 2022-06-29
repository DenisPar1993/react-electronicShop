import React from 'react'
import SideFilter from '../components/SideFilter';
import Cart from '../components/Cart';
import { fetchPads } from '../Slices/PadSlice';
import filtIcon from '../assist/filters.svg'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState,useRef } from 'react';
import { padFilter,padPrice } from '../Slices/PadSlice';
import { callBackendAPI } from '../service';
import { filtItem,filtPrice } from '../service';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

 const Pads = () => {
  const inputEl = useRef(null);
  const [filt, setFilt] = useState([])
  const [price, setPrice] = useState(null)
  const [wrapHeight,setWrapHeight]=useState(0)
    const screenWidth = window.screen.width
    console.log(screenWidth);
    useEffect(()=>{
        if(screenWidth<=990){
            setOpenFilt(true)
        setWrapHeight(inputEl.current.clientHeight)
        }
     padFilter(null)
    },[])
  const fav=useSelector(state=>state.favorite.favorite)
  const loading = useSelector(state=>state.pads.loading)
    const error = useSelector(state=>state.pads.error)
   const pads=useSelector(state=>{
     let padArr= state.pads
     let resArr=state.pads.pads
     console.log('begin ',resArr);
     console.log(padArr);
    if(filt|| price){
    if(filt.length>0){
      console.log('work  ',resArr);
        resArr= filtItem(padArr.pads,filt)  
    }
    if(price){
        resArr= filtPrice(resArr,price)
    }
      
    
   return resArr
     
    }

    
        return padArr.pads
   })
   const dispatch =useDispatch();
 
   const [name,setName] =useState(null)
   const [openFilt,setOpenFilt]=useState(true)
   const takePrice=(value)=>{
    console.log(value);
   setPrice(value)
}
const takeFilter=(value)=>{
    console.log('value ', value);
    setFilt(value)
}
const clearFilt=()=>{
  
  setPrice(null)
  console.log('Очистка фывыф')
  setFilt([])
}
const filtSmart =(fil)=>{
  if(name){
      return fil[0]
  }
  return fil

}
const closeFilt=(value)=>{
  setOpenFilt(value)
}
useEffect(()=>{
  if(screenWidth<=990){
      document.querySelector('body').style.overflow=!openFilt?'hidden':'auto';
  }

},[openFilt])
      useEffect(() => {
        dispatch(fetchPads());
  
    }, [])
  return (
    <div className="container">
      {error&&<ErrorMessage/>}
            {loading&&<Spinner/>}
            {!(loading||error)&&<div 
            ref={inputEl} 
            className='gadget__wrap'>
                <SideFilter 
                closeFilt={closeFilt}
                openFilt={openFilt}
                clearFilt={clearFilt}
                filterFunc={takeFilter}
                wrapHeight={wrapHeight}
                priceFunc={takePrice}
                 />
                 {openFilt&&screenWidth<=990&&<img onClick={()=>setOpenFilt(!openFilt)} className='filt-button' src={filtIcon}/>}
                {!openFilt&&<div
                 className='blur'
                 
                 onClick={()=>setOpenFilt(!openFilt)}></div>}
                <div className="gadget__items">
                {pads && pads.map((item, i) => {
            return (
              <Cart
               key={i}
                name={item.name}
                 price={item.price}
                  img={item.img}
                  fav={fav[item.id]}
                  id={item.id}
                  group='gadget'
                  />
                  
            )
          })}
                    
                </div>
            </div>}
        </div>
  )
}

export default Pads;
