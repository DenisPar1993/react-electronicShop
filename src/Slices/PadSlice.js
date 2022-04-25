import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "../service";


const initialState={
    pads:[],
    filterPads:[],
    priceFilter:null
}
export const fetchPads = createAsyncThunk(
    'main/fetchPads',
    async ()=>{
      
     const ResponseMain=callBackendAPI('/pads')
      .then(res => res)
      .then(res => res)
      return ResponseMain;

    }
)


const padSlice = createSlice({
    name:"pad",
    initialState,
    reducers:{
        padFilter:(state, action)=>{state.filterPads=action.payload},
        padPrice:(state,action)=>{state.priceFilter=action.payload}
    },
    extraReducers:(builder)=>{
        builder
                .addCase(fetchPads.fulfilled,(state,action)=>{
                    state.pads=action.payload;
                    
                })
               
    }
})

const {actions,reducer}=padSlice;
export const {
    padFilter,
    padPrice
}= actions
export default reducer;