import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Context from "../context/Context";

function CartItem({ entry }) {
  const { globalProducts, userInfos } = useContext(Context);
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const [itemId, quantityEntry] = entry;
    const product = globalProducts.find(({ productId }) => productId === itemId);

    console.log(product, itemId, globalProducts)

    setQuantity(quantityEntry);
    setItem(product);
  }, []);

  // console.log(userInfos.cartIds);
  console.log(item?.thumbnail)

  return (
    <CartItemStyled>
      <figure>
        <img alt="thumbnail" src={`./images/${item?.thumbnail}`} />
      </figure>
      <div>
        <p>{item?.name}</p>
        <div>
          <h3>
            {`R$ ${String(Number(item?.price * quantity).toFixed(2)).replace('.', ',')}`}
          </h3>
          <div>
            <div>
              <button
                type="button"
              >
                <ion-icon name="remove-circle-outline"></ion-icon>
              </button>
              <p>{quantity}</p>
              <button
                type="button"
              >
                <ion-icon name="add-circle-outline"></ion-icon>
              </button>
            </div>
            <ion-icon name="trash-outline"></ion-icon>
          </div>
        </div>
      </div>
    </CartItemStyled>
  )
};

const CartItemStyled = styled.div`
  display: flex;
  padding: 15px 5px 15px 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  figure {
    width: 15%;

    img {
      width: 100%;
    }
  }

  & > div {
    /* background-color: red; */
    width: 85%;
    display: flex;
    flex-direction: column;
    padding: 5px 15px 5px 15px;

    & > p:first-of-type {
      /* background-color: purple; */
    }

    & > div {
      /* background-color: yellow; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 100%;

      & > h3 {
        font-size: 20px;
        font-weight: 600;
        color: green;
      }

      & > div {
        /* background-color: green; */
        display: flex;
        /* padding: 16px; */
        align-items: center;

        & > * {
          margin: 5px;
          font-size: 25px;
        }

        & > div {
          display: flex;
          border: 1px solid rgba(0, 0, 0, 0.3);
          padding: 8px;
          border-radius: 12px;
          
          & button {
            background-color: transparent;
            border: none;
            font-size: 20px;
          }
        }
      }
    }
  }
`;

export default CartItem;
