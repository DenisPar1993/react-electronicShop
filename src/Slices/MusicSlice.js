import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "../service";


const initialState={
    music:[],
    filterMusic:[],
    priceFilter:null,
    loading:false,
    error:false
}
export const fetchMusic = createAsyncThunk(
    'music/fetchMusic',
    async ()=>{
      
     const ResponseMain=callBackendAPI('music')
      .then(res => res)
      .then(res => res)
      return ResponseMain;

    }
)


const musicSlice = createSlice({
    name:"music",
    initialState,
    reducers:{
        musicFilter:(state, action)=>{state.filterMusic=action.payload},
        musicPrice:(state,action)=>{state.priceFilter=action.payload}
    },
    extraReducers:(builder)=>{
        builder
                .addCase(fetchMusic.fulfilled,(state,action)=>{
                    state.music=action.payload;
                    state.loading=false
                    
                })
                .addCase(fetchMusic.pending,(state,action)=>{
                    state.loading=true;
                    state.error=false
                })
                .addCase(fetchMusic.rejected,(state,action)=>{
                    state.error=true;
                    state.loading=false;
                })
               
               
    }
})

const {actions,reducer}=musicSlice;
export const {
    musicFilter,
    musicPrice
}= actions
export default reducer;