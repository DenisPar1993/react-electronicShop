import React from 'react'
import SideFilter from '../components/SideFilter';
import Cart from '../components/Cart';
import { useEffect, useState } from 'react';
import { callBackendAPI } from '../service';
import { fetchMusic } from '../Slices/MusicSlice';
import { useDispatch, useSelector } from 'react-redux';
import { musicFilter,musicPrice } from '../Slices/MusicSlice';
import { filtItem,filtPrice } from '../service';

 const Music = () => {
    // const [music, setMusic] = useState(null)
    const dispatch = useDispatch();
    const music=useSelector(state=>{
      console.log(state.music);
      let musicArr= state.music
      let resArr=state.music.music
      console.log('begin ',resArr);
      
 
 
     // let sm = state.smartphones
     // console.log('price  ',sm.priceFilter);
     // let bau=state.smartphones.smartphones
     if(musicArr.filterMusic.length>0 || musicArr.priceFilter){
     if(musicArr.filterMusic.length>0){
       console.log('work  ',resArr);
         resArr= filtItem(musicArr.music,musicArr.filterMusic)
         
     }
     if(musicArr.priceFilter){
         resArr= filtPrice(resArr,musicArr.priceFilter)
     }
       
     
    return resArr
      
     }
 
     
         return musicArr.music
    })
    const [name,setName] =useState(null)
    const takePrice=(value)=>{
      console.log(value);
      dispatch(musicPrice(value))
  }
  const takeFilter=(value)=>{
      console.log('value ', value);
      dispatch(musicFilter(value))
  }
      useEffect(() => {
        dispatch(fetchMusic())
  
    }, [])
  return (
    <div className="container">
            <div className='gadget__wrap'>
                <SideFilter filterFunc={takeFilter} priceFunc={takePrice}/>
                <div className="gadget__items">
                {music && music.map((item, i) => {
            return (
              <Cart key={i} name={item.name} price={item.price} img={item.img} />
            )
          })}
                    
                </div>
            </div>
        </div>
  )
}

export default Music;
