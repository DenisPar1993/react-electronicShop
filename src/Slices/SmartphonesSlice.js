import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "../service";


const initialState={
    smartphones:[],
    filterSmart:[],
    priceFilter:null,
    loading:false,
    error:false
}
export const fetchSmartphones = createAsyncThunk(
    'smartphones/fetchSmartphones',
    async ()=>{
      
     const ResponseMain=callBackendAPI('smartphones')
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
                    state.loading=false
                    
                })
                .addCase(fetchSmartphones.pending,(state,action)=>{
                    state.smartphones=action.payload;
                    state.error=false;
                    state.loading = true
                    
                })
                .addCase(fetchSmartphones.rejected,(state)=>{
                    state.error=true;
                    state.loading=false;
                })
               
    }
})

const {actions,reducer}=SmartphonesSlice;
export const {
    setFilter,
    setPrice
}= actions
export default reducer;