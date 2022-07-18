import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "../service";


const initialState={
    watch:[],
    filterWatch:[],
    priceFilter:null,
    loading:false,
    error:false
}
export const fetchWatch = createAsyncThunk(
    'watch/fetchWatch',
    async ()=>{
      
     const ResponseMain=callBackendAPI('watch')
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
                    state.loading=false
                    
                })
                .addCase(fetchWatch.pending,(state,action)=>{
                    
                    state.error=false;
                    state.loading = true
                    
                })
                .addCase(fetchWatch.rejected,(state)=>{
                    state.error=true;
                    state.loading=false;
                })
               
               
    }
})

const {actions,reducer}=watchSlice;
export const {
    watchFilter,
    watchPrice
}= actions
export default reducer;