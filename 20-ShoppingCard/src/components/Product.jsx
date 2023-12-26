import React from "react";
import { useCart } from "../context/CartProvider";

const Product = ({ id, title, img, price }) => {
  const { cart, dispatch } = useCart();

  function handleAdd() {
    if (cart.find((item) => item.id == id)) {
      return;
    }

    const newItem = {
      id,
      title,
      img,
      price,
      quantity: 1,
    };

    dispatch({ type: "ADD_TO_CART", payload: newItem });
  }
  return (
    <div>
      <p>id: {id}</p>
      <img src={img} alt={title} width={200} />
      <h4>{title}</h4>
      <h5>{price}</h5>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default Product;
