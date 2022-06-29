import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "../service";


const initialState={
    pads:[],
    filterPads:[],
    priceFilter:null,
    loading:false,
    error:false
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
                    state.loading=false
                    
                })
                .addCase(fetchPads.pending,(state,action)=>{
                    state.loading=true;
                    state.error=false
                })
                .addCase(fetchPads.rejected,(state,action)=>{
                    state.error=true;
                    state.loading=false;
                })
               
    }
})

const {actions,reducer}=padSlice;
export const {
    padFilter,
    padPrice
}= actions
export default reducer;