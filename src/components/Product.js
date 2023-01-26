import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../context/Context";
import CartItemsHandler from "./CartItemsHandler";

function Product({ product }) {
  const {
    name,
    price,
    thumbnail,
    category,
    productId,
  } = product;

  const { userInfos, setUserInfos } = useContext(Context);

  return (
    <StyledProduct>
      <figure>
        <img alt="product" src={`./images/${thumbnail}`} />
      </figure>
      <div>
        <div>
          <p>{`R$ ${String(Number(price).toFixed(2)).replace('.', ',')}`}</p>
          <p>{name}</p>
        </div>
        <div>
          {
            userInfos.cartIds.filter((id) => id === productId).length === 0 ?
              <button
                type="button"
                onClick={() => {
                  setUserInfos((prevState) => ({
                    ...prevState,
                    cartIds: [...prevState.cartIds, productId],
                  }));
                }}
              >
                <ion-icon name="add-circle"></ion-icon>
              </button> :
              <CartItemsHandler productId={productId} />
          }
        </div>
      </div>
    </StyledProduct >
  )
};

export default Product;

const StyledProduct = styled.div`
  /* background-color: red; */
  border: 1px solid rgba(0, 0, 0, 0.2 );
  border-radius: 12px;
  width: 200px;
  height: 200px;
  margin: 15px;
  padding: 18px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  button:hover {
    /* background-color: red; */
  }

  figure {
    width: 100%;
    height: 70%;
  }

  img {
    width: 100%;
    height: 100%;
    /* background-color: yellow; */
  }

  & > div {
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:first-of-type {
      background-color: ;
      font-size: 24px;
      color: green;
      font-weight: 600;
      margin-bottom: 8px;
    }

    p:nth-of-type(2) {
      color: rgba(0, 0, 0, 0.5);
    }

    & > div:nth-of-type(2) {
      /* background-color: yellow; */
      position: relative;


      & > button {
        font-size: 22px;
        color: green;
        padding: 15px;
        border: none;
        background-color: transparent;
      }

      & > div {
        background-color: rgb(240, 240, 240);
        display: flex;
        padding: 3px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 15px;
        position: absolute;
        right: -10px;
        bottom: -40px;

        * {
          margin: 2px;
          background-color: transparent;
          border: none;
          font-size: 22px;
        }

        p {
          border: 1px solid green;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          padding: 10px;
        }
      }
    }
  }
`;
