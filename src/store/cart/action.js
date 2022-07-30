import { ADD_TO_CART, CLEAR_CART, DEC_CART, DEL_ITEM_FROM_CART, ERROR_IN_CART, GET_CART, INC_CART, LOADING_CART } from "./actionType"
import axios from 'axios';
import { getProductCount } from "../../utilities/cartCount";

export const loadingCart =()=>{
    return{
        type:LOADING_CART
    }
}
export const errorInCart =()=>{
    return{
        type:ERROR_IN_CART
    }
}
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

export const getUserCart=()=>(dispatch)=>{
    dispatch(loadingCart());
    axios({
        method:"get",
        url:"https://ecommerce-json.herokuapp.com/user"
    }).then(res=>{
        dispatch(getCart(res.data.cartItems));
    }).catch(err=>{
        dispatch(errorInCart());
    })
}


export const addInCart=(productDetails)=>(dispatch,state)=>{
    const cart=state()?.cart?.cart;

    dispatch(loadingCart);

    axios({
      method:'patch',
      url:'https://ecommerce-json.herokuapp.com/user',
      data:{
        cartItems:[...cart,{...productDetails,count:1}]
      }
    }).then(res=>{
      dispatch(addTOCart());
      dispatch(getUserCart())

    }).catch(err=>{
      dispatch(errorInCart());
    })
  }


export  const changeCartCount =(productDetails,num)=>(dispatch,state)=>{
    const cart=state()?.cart?.cart;
    const updatedCart =[...cart].map(el=>el.id===productDetails.id?{...productDetails, count:getProductCount(cart,el.id)+num}:el);
    dispatch(loadingCart());
    axios({
        method:'patch',
        url:'https://ecommerce-json.herokuapp.com/user',
        data:{
          cartItems:updatedCart
        }
      }).then(res=>{
        num>0?dispatch(incCart()):dispatch(decCart());
        dispatch(getUserCart())
  
      }).catch(err=>{
        dispatch(errorInCart());
      })

  }


  export const delCartProduct=(productDetails)=>(dispatch,state)=>{
    const cart=state()?.cart?.cart;
    const updatedCart =[...cart].filter(el=>el.id!==productDetails.id);
    dispatch(loadingCart);

    axios({
      method:'patch',
      url:'https://ecommerce-json.herokuapp.com/user',
      data:{
        cartItems:updatedCart
      }
    }).then(res=>{
      dispatch(delItemFromCart());
      dispatch(getUserCart())

    }).catch(err=>{
      dispatch(errorInCart());
    })
  }

  export const clearUserCart=()=>(dispatch)=>{
    
    dispatch(loadingCart);

    axios({
      method:'patch',
      url:'https://ecommerce-json.herokuapp.com/user',
      data:{
        cartItems:[]
      }
    }).then(res=>{
      dispatch(clearCart());
      dispatch(getUserCart())

    }).catch(err=>{
      dispatch(errorInCart());
    })
  }