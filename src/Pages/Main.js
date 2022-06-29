import React from 'react'
import Cart from '../components/Cart'
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import star from '../assist/garant.svg'
import car from '../assist/car_shipping_truck_icon.svg'
import prodChange from '../assist/return_shop_icon.svg'
import { callBackendAPI } from '../service';
import { fetchMain } from '../Slices/MainSlice';
import { useDispatch,useSelector } from 'react-redux';
import "slick-carousel/slick/slick.scss";
import ErrorMessage from '../components/ErrorMessage';

const Main = () => {
  const {mainArr}=useSelector(state=>state.main);
  const fav=useSelector(state=>state.favorite.favorite)
 const dispatch= useDispatch();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 1250,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
    {
      breakpoint: 990,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
      }
  },
  {
    breakpoint: 800,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
    }
  },
  {
    breakpoint: 635,
    settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,

    }
  },
  {
    breakpoint: 430,
    settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,

    }
  },
  {
    breakpoint: 350,
    settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,

    }
  }
    ]
  };
  const [resp, setResp] = useState(null)  
  useEffect(() => {
   dispatch(fetchMain())


  }, [])
  return (
    <div className='container'>
    

      <div className="main-wrapper">
        <h2 className="title">Новинки</h2>
        <div className='slide-wrapper'>
        <Slider {...settings}>
          {mainArr && mainArr.map((item, i) => {
            return (
              <Cart key={i} fav={fav[item.id]} name={item.name} price={item.price} img={item.img} id={item.id} group={item.group} />
            )
          })}

         
        </Slider>
        </div>
        <h2 className="title">Хиты продаж</h2>
        
        <div className='slide-wrapper'>
        <Slider {...settings}>
          {mainArr && mainArr.map((item, i) => {
            return (
              <Cart key={i} fav={fav[item.id]} name={item.name} price={item.price} img={item.img} id={item.id}  />
            )
          })}

         
        </Slider>
        </div>
        <h2 className="title">Наши преимущесва</h2>
        <div className="main__benefit">
          <div className="main__benefit-item">
            <div className="main__benefit-pic">
              <img src={star} alt="" />
            </div>
            <div className="main__benefit-descr">Гарантия на<br /> товар</div>
          </div>
          <div className="main__benefit-item">
            <div className="main__benefit-pic">
              <img className='benefit-car' src={car} alt="" />
            </div>
            <div className="main__benefit-descr">Бесплатная <br /> доставка</div>
          </div>
          <div className="main__benefit-item">
            <div className="main__benefit-pic">
              <img className='benefit-change'  src={prodChange} alt="" />
            </div>
            <div className="main__benefit-descr">Возврат и обмен<br /> товарами</div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Main




