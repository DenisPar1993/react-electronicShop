import React from 'react'
import { useState } from 'react';

 const SideFilter = ({filterFunc,priceFunc,openFilt,wrapHeight,closeFilt,clearFilt}) => {
  console.log(wrapHeight,'   sidedsadas');
  const screenWidth = window.screen.width
   const [beginPrice, setBeginPrice]=useState('')
   const [endPrice, setEndPrice]=useState('')
   const [valCompany, setValCompany]=useState([])
   const [filt, setFilt]=useState()
   const [filtComp,setFiltComp]=useState({
    'SAMSUNG':false,
    'APPLE':false,
    'XIAOMI':false,
    'HUAWEI':false,
    'VIVO':false
  })



const addFilt=()=>{
  let filt={from:beginPrice,before:endPrice}
  
  if(beginPrice||endPrice){
    console.log(filt);
    priceFunc(filt)
  }
  
}
  const takeVal=(e)=>{
    const arr=[]
    const val= filtComp
    console.log(e.target.value,' значенике');
    val[e.target.name]=!val[e.target.name]
    setValCompany(val)
    console.log('val ',val,val[e.target.name]);
    for(const name in val){
      if(val[name]){
         arr.push(name)
      }
    }
    
    // setValCompany(arr)
    console.log('new array ',arr);
    filterFunc(arr)
    
}
  const takeBegin=(e)=>{
    if(e.target.value==''){
      setBeginPrice('')
    }
    const val = +e.target.value;
    if(val && typeof val=="number"){
      setBeginPrice(val)
    }
  }
  const takeEnd=(e)=>{
    if(e.target.value==''){
      setEndPrice('')
    }
    const val = +e.target.value;
    if(val && typeof val=="number"){
      setEndPrice(val)
    }
  }
  const clearFilters=()=>{
    setFiltComp({
      'SAMSUNG':false,
      'APPLE':false,
      'XIAOMI':false,
      'HUAWEI':false,
      'ONEPLUS':false
    })
    setBeginPrice('')
    setEndPrice('')
    clearFilt()
  }

 

  return (
    <div  className={openFilt&&screenWidth<=990?'filt-active':'filt'}>
      {screenWidth<=990&&<div onClick={()=>closeFilt(true)} class="close"></div>}
        <p className='filt-title'>Производитель</p>
             <div className='filt-item'>
            <input className='input-check' checked={filtComp.SAMSUNG} name="SAMSUNG" onChange={takeVal} type="checkbox" />
            <label className='filt-name'  >SAMSUNG</label>
            </div>
            <div className='filt-item'>
            <input className='input-check'  checked={filtComp.APPLE} name="APPLE" onChange={takeVal}  type="checkbox" />
            <label className='filt-name'>APPLE</label>
            </div>
            <div className='filt-item'>
            <input className='input-check' checked={filtComp.XIAOMI} name="XIAOMI" onChange={takeVal}  type="checkbox" />
            <label className='filt-name'>XIAOMI</label>
            </div>
            <div className='filt-item'>
            <input className='input-check'  checked={filtComp.HUAWEI} name="HUAWEI" onChange={takeVal}  type="checkbox" />
            <label className='filt-name'>HUAWEI</label>
            </div>
            <div className='filt-item'>
            <input className='input-check' checked={filtComp.VIVO} name="VIVO" onChange={takeVal}  type="checkbox" />
            <label className='filt-name'>VIVO</label>
            </div>
            <p className='filt-title'>Цена</p>
            <div className='filt-price'>
            <span className='filt-price__name'>от</span>
            <input className='input-price' value={beginPrice} onChange={takeBegin} type="text" />
            <span className='filt-price__price'>до</span>
            <input className='input-price' value={endPrice}  onChange={takeEnd} type="text" />
            </div>
            <button onClick={addFilt} className='cart-button btn-filt'>Применить</button>
            <div onClick={clearFilters} className='clear-filt'>Очистить</div>
    </div>
  )
}
export default SideFilter;






const smartphones=[
  {name:'Huawei Nova 8i 8i 6/128Gb',price:'40000',img:"/data/main/huawei-nova8i.jpg",bigimg:"/data/bigimg/huawei-niva8i-big.jpg",
  id:1,
characteristics:{
  display:'6.67", IPS',
  brand:'HUAWEI',
  screenResolution:'2376x1080',
  cpu:'Qualcomm Snapdragon 662',
  coresNumber:8,
  frequency:'2000МГц',
  ram:'6ГБ',
  mainCamera:'64МП',
  frontCamera:'16МП',
  accumulator:'4300 мAч'
}},
{name:'Samsung Galaxy S20 FE',price:'44000',img:"/data/main/galaxy-s20fe.jpg",bigimg:"/data/bigimg/galaxy-s20fe-big.jpg",
id:2,
characteristics:{
  display:'6.5", Super AMOLED',
  brand:'SAMSUNG',
  screenResolution:'2400x1080',
  cpu:'Qualcomm Snapdragon 865',
  coresNumber:8,
  frequency:'2400МГц',
  ram:'6ГБ',
  mainCamera:'12МП',
  frontCamera:'32МП',
  accumulator:'4500 мAч'
}},
{name:'Galaxy S21 Ultra 5G 128GB Purple',price:'53000',img:"/data/main/galaxy-s21-cart.jpg",bigimg:"/data/bigimg/GalaxiS21-bigimg.jpg",
id:3,
characteristics:{
  display:'6.8", Dynamic AMOLED 2X',
  brand:'SAMSUNG',
  screenResolution:'3200x1440',
  cpu:'Exynos 2100',
  coresNumber:8,
  frequency:'2900МГц',
  ram:'12ГБ',
  mainCamera:'108МП',
  frontCamera:'40МП',
  accumulator:'5000 мAч'
}},
{name:'Apple iPhone 13 Pro 128GB Синий',price:'99990',img:"/data/main/iphone-cart.jpg",
bigimg:"/data/bigimg/iphone13-bigimg.jpg",
id:4,
characteristics:{
  display:'6.1", OLED',
  brand:'APPLE',
  screenResolution:'2532x1170',
  cpu:'Apple A15 Bionic',
  coresNumber:6,
  frequency:'2960МГЦ',
  ram:'8ГБ',
  mainCamera:'12МП',
  frontCamera:'12МП',
  accumulator:'3300мАч'
}},
{name:'Apple iPhone 12 128Gb черный',price:'75000',img:"/data/main/iphone12.jpg",
bigimg:"/data/bigimg/iphone12-Big.jpg",
id:5,
characteristics:{
  display:'6.1", OLED',
  brand:'APPLE',
  screenResolution:'2532x1170',
  cpu:'Apple A14 Bionic',
  coresNumber:6,
  frequency:'2990МГЦ',
  ram:'8ГБ',
  mainCamera:'12МП',
  frontCamera:'12МП',
  accumulator:'3300мАч'
}},
{name:'VIVO V23 8/128Gb gold',price:'34000',img:"/data/main/vivo-v23.jpg",
bigimg:"/data/bigimg/vivo-v23-big.jpg",
id:6,
characteristics:{
  display:'6.44", AMOLED',
  brand:'VIVO',
  screenResolution:'2400x1080',
  cpu:'MediaTek Dimensity 920',
  coresNumber:8,
  frequency:'2500МГЦ',
  ram:'8ГБ',
  mainCamera:'64МП',
  frontCamera:'50МП',
  accumulator:'4200мАч'
}},
{name:'Poco X3 PRO NFC 128 ГБ',price:'22000',img:"/data/main/XiaomiPocox3.jpg",
bigimg:"/data/bigimg/XiaomiBigImage.jpg",
id:7,
characteristics:{
  display:'6.67", IPS',
  brand:'XIAOMI',
  screenResolution:'2400x1080',
  cpu:'Qualcomm Snapdragon 860',
  coresNumber:8,
  frequency:'2960МГЦ',
  ram:'8ГБ',
  mainCamera:'64МП',
  frontCamera:'12МП',
  accumulator:'5160мАч'
}},
{name:'Xiaomi Redmi Note 10 Pro 128 ГБ',price:'33000',img:"/data/main/xiaomiredminote10.jpg",
bigimg:"/data/bigimg/xiaomiredminote10-big.jpg",
id:8,
characteristics:{
  display:'6.43", AMOLED',
  brand:'XIAOMI',
  screenResolution:'2400x1080',
  cpu:'Mediatek Helio G95',
  coresNumber:8,
  frequency:'2050МГЦ',
  ram:'6ГБ',
  mainCamera:'64МП',
  frontCamera:'13МП',
  accumulator:'5000мАч'
}},

]

const av=['SAMSUNG']
const am= av.forEach(item=>{
  return smartphones.filter(elem=>console.log(elem.characteristics.brand))
})
console.log(am);