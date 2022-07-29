import { ADD_TO_CART, CLEAR_CART, DEC_CART, DEL_ITEM_FROM_CART, GET_CART, INC_CART } from "./actionType"

export const addTOCart =()=>{
    return{
        type:ADD_TO_CART
    }
}

export const incCart =()=>{
    return{
        type:INC_CART
    }
}

export const decCart =()=>{
    return{
        type:DEC_CART
    }
}

export const delItemFromCart =()=>{
    return{
        type:DEL_ITEM_FROM_CART
    }
}

export const clearCart =()=>{
    return{
        type:CLEAR_CART
    }
}

export const getCart =(payload)=>{
    return{
        type:GET_CART,
        payload
    }
}
