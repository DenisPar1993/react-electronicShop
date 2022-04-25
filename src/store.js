import { configureStore} from "@reduxjs/toolkit";
import main from './Slices/MainSlice'
import smartphones from './Slices/SmartphonesSlice';
import pads from './Slices/PadSlice';
import watch from './Slices/WatchSlice';
import music from './Slices/MusicSlice'


const store = configureStore({
    reducer:{main,smartphones,pads,watch,music},
    middleware:getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;

