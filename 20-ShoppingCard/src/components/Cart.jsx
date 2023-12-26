import React from 'react'
import {useCart} from '../context/CartProvider'
import CartItem from './UI Components/CartItem';

const Cart = () => {

  const {cart} = useCart();

  return (
    <div>
      
      {cart.map(cartItem=>(<CartItem {...cartItem}/>))}

      <p> {cart.length!=0 &&  "Total:"+ cart?.reduce((acc,curr)=>{
        return Number(acc) + Number(curr?.price) * Number(curr?.quantity); 
      },0)} </p>

    </div>
  )
}

export default Cart