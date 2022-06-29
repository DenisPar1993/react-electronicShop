import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callBackendAPI } from "../service";



const initialState={
   gadget:null,
   loading:false,
    error:false
}
   export const fetchGadget = createAsyncThunk(
    'gadget/fetchGadget',
    async (id)=>{
      
     const ResponseMain=callBackendAPI(`/gadget/${id}`)
      .then(res => res)
      .then(res => res)
      return ResponseMain;

    }
)


const gadgetSlice= createSlice({
    name:'/gadget',
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(fetchGadget.fulfilled,(state,action)=>{
                state.loading=false
                state.gadget=action.payload
            })
            .addCase(fetchGadget.pending,(state,action)=>{
                state.loading=true;
                state.error=false
            })
            .addCase(fetchGadget.rejected,(state,action)=>{
                state.error=true;
                state.loading=false;
            })
    }
})

const {actions,reducer}=gadgetSlice;
export default reducer;