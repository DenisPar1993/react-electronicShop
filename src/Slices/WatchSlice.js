import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "../service";


const initialState={
    watch:[],
    filterWatch:[],
    priceFilter:null
}
export const fetchWatch = createAsyncThunk(
    'watch/fetchWatch',
    async ()=>{
      
     const ResponseMain=callBackendAPI('/watch')
      .then(res => res)
      .then(res => res)
      return ResponseMain;

    }
)


const watchSlice = createSlice({
    name:"watch",
    initialState,
    reducers:{
        watchFilter:(state, action)=>{state.filterWatch=action.payload},
        watchPrice:(state,action)=>{state.priceFilter=action.payload}
    },
    extraReducers:(builder)=>{
        builder
                .addCase(fetchWatch.fulfilled,(state,action)=>{
                    state.watch=action.payload;
                    
                })
               
    }
})

const {actions,reducer}=watchSlice;
export const {
    watchFilter,
    watchPrice
}= actions
export default reducer;