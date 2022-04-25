import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "../service";


const initialState={
    smartphones:[],
    filterSmart:[],
    priceFilter:null
}
export const fetchSmartphones = createAsyncThunk(
    'smartphones/fetchSmartphones',
    async ()=>{
      
     const ResponseMain=callBackendAPI('/smartphones')
      .then(res => res)
      .then(res => res)
      return ResponseMain;

    }
)


const SmartphonesSlice = createSlice({
    name:"smartphones",
    initialState,
    reducers:{
        setFilter:(state, action)=>{state.filterSmart=action.payload},
        setPrice:(state,action)=>{state.priceFilter=action.payload}
    },
    extraReducers:(builder)=>{
        builder
                .addCase(fetchSmartphones.fulfilled,(state,action)=>{
                    state.smartphones=action.payload;
                    
                })
               
    }
})

const {actions,reducer}=SmartphonesSlice;
export const {
    setFilter,
    setPrice
}= actions
export default reducer;