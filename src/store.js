import { configureStore} from "@reduxjs/toolkit";
import main from './Slices/MainSlice'
import smartphones from './Slices/SmartphonesSlice';
import pads from './Slices/PadSlice';
import watch from './Slices/WatchSlice';
import music from './Slices/MusicSlice'
import basket from './Slices/BasketSlice'
import favorite from './Slices/FavoriteSlice'
import gadget from './Slices/GadgetSlice'


const store = configureStore({
    reducer:{main,smartphones,pads,watch,music,basket,favorite,gadget},
    middleware:getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;

