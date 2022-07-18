import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "../service";


const initialState={
    mainArr:[]
}
export const fetchMain = createAsyncThunk(
    'main/fetchMain',
    async ()=>{
      
     const ResponseMain=callBackendAPI('main')
      .then(res => res)
      .then(res => res)
      return ResponseMain;

    }
)


const mainSlice = createSlice({
    name:"main",
    initialState,
    extraReducers:(builder)=>{
        builder
                .addCase(fetchMain.fulfilled,(state,action)=>{
                    state.mainArr=action.payload;
                    
                })
               
    }
})

const {actions,reducer}=mainSlice;
export default reducer;