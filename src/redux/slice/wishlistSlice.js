import { createSlice } from "@reduxjs/toolkit";



export const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:[],
    reducers:{
        //1) add to WishList
        addToWishList : (state, actions)=>{
            state.push(actions.payload)
        },

        //2) remove from WishList
        removeFromWishList : (state, actions)=>{
            return state.filter((item)=>item.id!=actions.payload)
        }
    }
})

export const {addToWishList,removeFromWishList} = wishlistSlice.actions

export default wishlistSlice.reducer