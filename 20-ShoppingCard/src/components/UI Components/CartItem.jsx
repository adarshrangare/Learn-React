import React from "react";
import { useCart } from "../../context/CartProvider";

const CartItem = ({ id, price, img, title, quantity }) => {
  
    const {cart,dispatch} = useCart();
    
    function handleIncrease(){
        
        if(quantity>=5){
            alert("Maximum Products in Cart");
            return;
        }
        dispatch({type:"INC_QUANTITY",payload:id});
    }

    function handleDecrease(){
        
        if(quantity==1){
            handleRemove();
            return;
        }
        dispatch({type:"DEC_QUANTITY",payload:id});
    }

    function handleRemove(){
        
        dispatch({type:"REM_PRODUCT",payload:id});
    }

    return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <p>{id}</p>
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
