import SideFilter from "../components/SideFilter";
import Cart from "../components/Cart";
import { useEffect, useState } from 'react';
import { callBackendAPI } from "../service";
import { fetchWatch } from "../Slices/WatchSlice";
import { useDispatch,useSelector } from "react-redux";
import { watchFilter,watchPrice } from "../Slices/WatchSlice";
import { filtItem,filtPrice } from '../service';

 const Watch = () => {
   const dispatch =useDispatch();
   const watch=useSelector(state=>{
     console.log(state.watch);
     let watchArr= state.watch
     let resArr=state.watch.watch
     console.log('begin ',resArr);
     


    // let sm = state.smartphones
    // console.log('price  ',sm.priceFilter);
    // let bau=state.smartphones.smartphones
    if(watchArr.filterWatch.length>0 || watchArr.priceFilter){
    if(watchArr.filterWatch.length>0){
      console.log('work  ',resArr);
        resArr= filtItem(watchArr.watch,watchArr.filterWatch)
        
    }
    if(watchArr.priceFilter){
        resArr= filtPrice(resArr,watchArr.priceFilter)
    }
      
    
   return resArr
     
    }

    
        return watchArr.watch
   })
   const takePrice=(value)=>{
    console.log(value);
    dispatch(watchPrice(value))
}
const takeFilter=(value)=>{
    console.log('value ', value);
    dispatch(watchFilter(value))
}
   const [name,setName] =useState(null)


      useEffect(() => {
        dispatch(fetchWatch())
       
    }, [])
  return (
    <div className="container">
    <div className='gadget__wrap'>
        <SideFilter filterFunc={takeFilter} priceFunc={takePrice}/>
        <div className="gadget__items">
        {watch && watch.map((item, i) => {
    return (
      <Cart key={i} name={item.name} price={item.price} img={item.img} />
    )
  })}
            
        </div>
    </div>
</div>
  )
}

export default Watch;
