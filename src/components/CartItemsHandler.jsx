import React, { useContext } from "react";
import Context from "../context/Context";

function CartItemsHandler({ productId }) {
  const { userInfos, removeFromCart, addToCart } = useContext(Context);

  return (
    <div>
      <button
        type="button"
        onClick={() => removeFromCart(productId)}
      >
        <ion-icon name="remove-circle-outline"></ion-icon>
      </button>
      <p>{userInfos.cartIds.filter((id) => id === productId).length}</p>
      <button
        type="button"
        onClick={() => addToCart(productId)}
      >
        <ion-icon name="add-circle-outline"></ion-icon>
      </button>
    </div>
  )
};

export default CartItemsHandler;
