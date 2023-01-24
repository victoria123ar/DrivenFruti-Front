import React, { useState } from "react";
import styled from "styled-components";

function Product({ product }) {
  const {
    name,
    price,
    thumbnail,
    category,
    productId,
  } = product;

  const [quantity, setQuantity] = useState(0);

  function addToCart() {

  };

  return (
    <StyledProduct>
      <figure>
        <img alt="product" src={`./images/${thumbnail}`} />
      </figure>
      <div>
        <div>
          <p>{name}</p>
          <p>{`R$ ${price.toFixed(2)}`}</p>
          {quantity}
        </div>
        <div>
          {
            quantity === 0 ?
              <button
                type="button"
                onClick={() => setQuantity((prevState) => prevState + 1)}
              >

                <ion-icon name="add-circle"></ion-icon>
              </button> :
              <div>
                <p onClick={(prevState) => prevState - 1}>-</p>
                <p>{quantity}</p>
                <p onClick={(prevState) => prevState + 1}>+</p>
              </div>
          }
        </div>
      </div>
    </StyledProduct>
  )
};

export default Product;

const StyledProduct = styled.div`
  /* background-color: red; */
  border: 1px solid rgba(0, 0, 0, 0.2 );
  border-radius: 12px;
  width: 170px;
  height: 170px;
  margin: 15px;
  padding: 18px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  button:hover {
    background-color: red;
  }

  figure {
    /* background-color: purple; */
    width: 100%;
    height: 70%;
  }

  img {
    width: 100%;
    height: 100%;
    /* background-color: yellow; */
  }

  & > div {
    /* background-color: purple; */
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 22px;
      color: green;
      padding: 15px;
      border: none;
      background-color: transparent;
    }

    & > button:nth-of-type(2) {
      background-color: yellow;
    }
  }
`;
