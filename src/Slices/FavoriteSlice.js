import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState={
    favorite:{},
    
   
}


const FavoriteSlice=createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addFavorite:(state,action)=>{
            if(state.favorite[action.payload.id]){
                 delete state.favorite[action.payload.id]
            }else{
                state.favorite[action.payload.id]=action.payload
            }
        }
    }

})


const {actions,reducer}=FavoriteSlice;
export const {
    addFavorite
}= actions
export default reducer;