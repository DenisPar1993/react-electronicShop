import React,{useRef} from 'react'
import SideFilter from '../components/SideFilter';
import Cart from '../components/Cart';
import filtIcon from '../assist/filters.svg'
import { useEffect, useState } from 'react';
import { callBackendAPI } from '../service';
import { fetchSmartphones,setFilter, setPrice } from '../Slices/SmartphonesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filtItem,filtPrice } from '../service';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const Smartphones = () => {
    const inputEl = useRef(null);
    
    
    const screenWidth = window.screen.width
    console.log(screenWidth);
    useEffect(()=>{
        if(screenWidth<=990){
            setOpenFilt(true)
        setWrapHeight(inputEl.current.clientHeight)
        }
     setFilter(null)
    },[])
    
    const [filt, setFilt] = useState([])
    const [wrapHeight,setWrapHeight]=useState(0)
    const [price, setPrice] = useState(null)
    const [name,setName] =useState(null)
    const [openFilt,setOpenFilt]=useState(true)
    const loading = useSelector(state=>state.smartphones.loading)
    const error = useSelector(state=>state.smartphones.error)
    console.log('loading  =',loading);
    const fil= useSelector(state=>{
        return state.smartphones.filterSmart
    })
    
    const fav=useSelector(state=>state.favorite.favorite)
    console.log('fav   ',fav);
    let smartphones=useSelector(state=>{
        
        let sm = state.smartphones
        console.log('price  ',sm.priceFilter);
        let bau=state.smartphones.smartphones
        if(filt || price){
            // console.log('сработало ',sm.smartphones,'asdsd ',sm.filterSmart);
        //   console.log(sm.smartphones)
        if(filt.length>0){
            bau= filtItem(sm.smartphones,filt)
        }
        if(price){
            console.log('работает ',bau);
            bau= filtPrice(bau,price)
        }
          
        
       return bau
        console.log('fffasdsad ',bau);
         
        }

        
            return sm.smartphones
        
       
    });
    useEffect(()=>{
        if(screenWidth<=990){
            document.querySelector('body').style.overflow=!openFilt?'hidden':'auto';
        }

    },[openFilt])
    
    const dispatch= useDispatch();
    const takePrice=(value)=>{
        console.log('price   =',value);
        // dispatch(setPrice(value))
        setPrice(value)
    }
    const takeFilter=(value)=>{
        console.log('value ', value);
        // dispatch(setFilter(value))
        setFilt(value)
    }
    const clearFilt=()=>{
        setPrice(null)
        setFilt([])
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

   const closeFilt=(value)=>{
      setOpenFilt(value)
   }
   

  
    return (
        <div className="container">
            {error&&<ErrorMessage/>}
            {loading&&<Spinner/>}
            {!(loading||error)&&<div ref={inputEl} className='gadget__wrap'>
              
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
                 
                <div  className="gadget__items">
                {smartphones && smartphones.map((item, i) => {
            return (
              <Cart key={i} fav={fav[item.id]} name={item.name} price={item.price} img={item.img} id={item.id} group='gadget'/>
            )
          })}
                    
                </div>
            </div>}
        </div>
    )
}
export default Smartphones