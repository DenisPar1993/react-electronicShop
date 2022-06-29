import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getTotalPrice=(arr)=>{
    return Object.keys(arr).reduce((accum,key)=>{
        console.log(accum,arr[key].length);
return +accum + (+arr[key].length*arr[key][0].price)
},0)
}
const getTotalCount=(arr)=>{
    return Object.keys(arr).reduce((accum,key)=>{
        console.log(accum,arr[key].length);
return +accum + +arr[key].length
},0)
}


const initialState={
    basket:{},
    totalCount:0,
    totalPrice:0
   
}
// export const fetchMusic = createAsyncThunk(
//     'basket/fetchMusic',
//     async ()=>{
      
//      const ResponseMain=callBackendAPI('/music')
//       .then(res => res)
//       .then(res => res)
//       return ResponseMain;

//     }
// )


const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        basketAdd:(state, action)=>{if(state.basket[action.payload.id]){
            state.basket[action.payload.id].push(action.payload)
            
        }else{
            state.basket[action.payload.id]=[action.payload]
        }
        state.totalCount=getTotalCount(state.basket)
        state.totalPrice=getTotalPrice(state.basket)
    },
    plusCountBasket:(state,action)=>{
    state.basket[action.payload].push(state.basket[action.payload][0])
    state.totalCount=getTotalCount(state.basket)
        state.totalPrice=getTotalPrice(state.basket)
    },
    minusCountBasket:(state,action)=>{
        if(state.basket[action.payload].length>1){
            state.basket[action.payload].pop()
            state.totalCount=getTotalCount(state.basket)
        state.totalPrice=getTotalPrice(state.basket)
        }
        
        },
     deleteItemBasket:(state,action)=>{
         delete state.basket[action.payload]
         state.totalCount=getTotalCount(state.basket)
        state.totalPrice=getTotalPrice(state.basket)

     },
     clearBasket:(state,action)=>{
         state.basket={}
         state.totalCount=0
         state.totalPrice=0
     }   
       
       
    }
})

const {actions,reducer}=basketSlice;
export const {
    basketAdd,
    plusCountBasket,
    minusCountBasket,
    deleteItemBasket,
    clearBasket
    
}= actions
export default reducer;