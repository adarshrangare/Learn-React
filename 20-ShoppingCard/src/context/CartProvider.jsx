import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialCart = [];

function cartReducer(cartState, action) {
  console.log(action);

  if (action.type === "ADD_TO_CART") {
    return [...cartState, action.payload];
  }

  if (action.type === "INC_QUANTITY") {
    const updated = cartState.map((item) => {
      if (item.id == action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
     return updated;
  }

  if (action.type === "DEC_QUANTITY") {
    const updated = cartState.map((item) => {
      if (item.id == action.payload) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
     return updated;
  }

  if(action.type === "REM_PRODUCT"){

    return cartState.filter((item)=>item.id != action.payload)

  }


  return cartState;
}

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Helper Function

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
