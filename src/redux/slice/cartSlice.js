import { createSlice } from "@reduxjs/toolkit"



export const cartSlice = createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
        //1)add to cart
        addToCart : (state, action)=>{
            state.push(action.payload)
        },

        //2)remove from cart
        removeFromCart : (state , action)=>{
            return state.filter((item)=>item.id!=action.payload)
        },

        //3)empty the cart
        emptyCart : (state)=>{
            return state=[]
        }
    }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer