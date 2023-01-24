import React from "react";
import styled from "styled-components";

function Product({ product }) {
  const {
    name,
    price,
    thumbnail,
    category,
    productId,
  } = product;

  console.log(thumbnail)

  return (
    <StyledProduct>
      <figure>
        <img alt="product" src={`./images/${thumbnail}`} />
      </figure>
      <div>
        <p>{name}</p>
        <p>{`R$ ${price.toFixed(2)}`}</p>
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
    flex-direction: column;
    justify-content: center;
  }
`;
