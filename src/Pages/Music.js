import React from 'react'
import SideFilter from '../components/SideFilter';
import Cart from '../components/Cart';
import { useEffect, useState,useRef } from 'react';
import filtIcon from '../assist/filters.svg'
import { callBackendAPI } from '../service';
import { fetchMusic } from '../Slices/MusicSlice';
import { useDispatch, useSelector } from 'react-redux';
import { musicFilter,musicPrice } from '../Slices/MusicSlice';
import { filtItem,filtPrice } from '../service';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

 const Music = () => {
    // const [music, setMusic] = useState(null)
    const inputEl = useRef(null);
    const screenWidth = window.screen.width
    console.log(screenWidth);
    useEffect(()=>{
        if(screenWidth<=990){
            setOpenFilt(true)
        setWrapHeight(inputEl.current.clientHeight)
        }
        musicFilter(null)
    },[])
    const [wrapHeight,setWrapHeight]=useState(0)
    const [filt, setFilt] = useState([])
    const [price, setPrice] = useState(null)
    const dispatch = useDispatch();
    const fav=useSelector(state=>state.favorite.favorite)
    const loading = useSelector(state=>state.music.loading)
    const error = useSelector(state=>state.music.error)
    const music=useSelector(state=>{
      console.log(state.music);
      let musicArr= state.music
      let resArr=state.music.music
      console.log('begin ',resArr);
      
 
 
     // let sm = state.smartphones
     // console.log('price  ',sm.priceFilter);
     // let bau=state.smartphones.smartphones
     if(filt || price){
     if(filt.length>0){
       console.log('work  ',resArr);
         resArr= filtItem(musicArr.music,filt)
         
     }
     if(price){
         resArr= filtPrice(resArr,price)
     }
       
     
    return resArr
      
     }
 
     
         return musicArr.music
    })
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
    setFilt([])
}
const closeFilt=(value)=>{
  setOpenFilt(value)
}

      useEffect(() => {
        dispatch(fetchMusic())
  
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
                priceFunc={takePrice} 
                 />
                  {openFilt&&screenWidth<=990&&<img onClick={()=>setOpenFilt(!openFilt)} className='filt-button' src={filtIcon}/>}
                {!openFilt&&<div
                 className='blur-filt'
                 
                 onClick={()=>setOpenFilt(!openFilt)}></div>}
                <div className="gadget__items">
                {!music.length&& <div className='empty-products'>Нет товара</div>}
                {music && music.map((item, i) => {
            return (
              <Cart key={i}
                fav={fav[item.id]}
                 name={item.name}
                  price={item.price}
                   img={item.img}
                   id={item.id}
                   group='music'
                    />
            )
          })}
                    
                </div>
            </div>}
        </div>
  )
}

export default Music;



