import React, { useContext } from "react";
import Context from "../context/Context";

function CartItemsHandler({ productId }) {
  const { userInfos, setUserInfos } = useContext(Context);

  // console.log(userInfos);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setUserInfos((prevState) => {
            // not happy with this code
            let idsFound = 0;
            const newIds = [];

            for (let i = 0; i < prevState.cartIds.length; i++) {
              if (prevState.cartIds[i] === productId) {
                idsFound += 1;
              }
              if (idsFound === 1) {
                continue;
              }

              newIds.push(prevState.cartIds[i]);
            }

            return ({
              ...prevState,
              cartIds: newIds,
            });
          })
        }}
      >
        <ion-icon name="remove-circle-outline"></ion-icon>
      </button>
      <p>{userInfos.cartIds.filter((id) => id === productId).length}</p>
      <button
        type="button"
        onClick={() => {
          setUserInfos((prevState) => ({
            ...prevState,
            cartIds: [...prevState.cartIds, productId],
          }));
        }}
      >
        <ion-icon name="add-circle-outline"></ion-icon>
      </button>
    </div>
  )
};

export default CartItemsHandler;
