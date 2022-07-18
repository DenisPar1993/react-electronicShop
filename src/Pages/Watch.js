import SideFilter from "../components/SideFilter";
import Cart from "../components/Cart";
import { useEffect, useState,useRef } from 'react';
import filtIcon from '../assist/filters.svg'
import { callBackendAPI } from "../service";
import { fetchWatch } from "../Slices/WatchSlice";
import { useDispatch,useSelector } from "react-redux";
import { watchFilter,watchPrice } from "../Slices/WatchSlice";
import { filtItem,filtPrice } from '../service';
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

 const Watch = () => {
  const inputEl = useRef(null);
  const [wrapHeight,setWrapHeight]=useState(0)
  const [openFilt,setOpenFilt]=useState(true)
  const [price, setPrice] = useState(null)
  const [filt, setFilt] = useState([])
  const screenWidth = window.screen.width
  useEffect(()=>{
    if(screenWidth<=990){
        setOpenFilt(true)
    setWrapHeight(inputEl.current.clientHeight)
    }
 watchFilter(null)
},[])
   const dispatch =useDispatch();
   const fav=useSelector(state=>state.favorite.favorite)
   const loading = useSelector(state=>state.watch.loading)
    const error = useSelector(state=>state.watch.error)
   const watch=useSelector(state=>{
     console.log(state.watch);
     let watchArr= state.watch
     let resArr=state.watch.watch
     console.log('begin ',resArr);
     


    // let sm = state.smartphones
    // console.log('price  ',sm.priceFilter);
    // let bau=state.smartphones.smartphones
    if(filt|| price){
    if(filt.length>0){
      console.log('work  ',resArr);
        resArr= filtItem(watchArr.watch,filt)
        
    }
    if(price){
        resArr= filtPrice(resArr,price)
    }
      
    
   return resArr
     
    }

    
        return watchArr.watch
   })
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

   const [name,setName] =useState(null)
   useEffect(()=>{
    if(screenWidth<=990){
        document.querySelector('body').style.overflow=!openFilt?'hidden':'auto';
    }

},[openFilt])

      useEffect(() => {
        dispatch(fetchWatch())
       
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
                 className='blur-filt'
                 
                 onClick={()=>setOpenFilt(!openFilt)}></div>}
        <div className="gadget__items">
        {!watch.length&& <div className='empty-products'>Нет товара</div>}
        {watch && watch.map((item, i) => {
    return (
      <Cart key={i} id={item.id}  fav={fav[item.id]} name={item.name} price={item.price} img={item.img} group='watch' />
    )
  })}
            
        </div>
    </div>}
</div>
  )
}

export default Watch;
