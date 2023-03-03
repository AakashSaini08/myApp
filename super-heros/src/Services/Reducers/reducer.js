import { ADD_TO_CART } from "../Constants";

    const initialValue ={
        cartData: []
    }

export default function cartItems(state = initialValue, action){
    switch(action.type){
        case ADD_TO_CART:
        console.log("reduce:",action)
        return {
            ...state,
            cartData: action.data
        }
        default :
        return state
    }

}