import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Context from "../context/Context";

function Header({ userInfos, Logo, handleSearch }) {

  const {
    globalProducts,
    setTotal,
  } = useContext(Context);

  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  function calculateTotal() {
    const cartProducts = userInfos.cartIds
      .map((id) => globalProducts.find(({ productId }) => productId === id));

    const totalNow = cartProducts.reduce((acc, curr) => acc + curr.price, 0);

    return totalNow.toFixed(2);
  };

  useEffect(() => {
    if (redirect) {
      navigate('/cart');
    }
  }, [redirect]);

  return (
    <div>
      <StyledHeader>
        <div>
          <figure>
            <img alt="logo" src={Logo} />
          </figure>
          <div>
            <StyledCartQuantity quantity={userInfos.cartIds.length}>
              {userInfos.cartIds.length > 0 && userInfos.cartIds.length}
            </StyledCartQuantity>

            <StyledCartTotal quantity={userInfos.cartIds.length}>
              {`R$ ${String(Number(calculateTotal()).toFixed(2)).replace('.', ',')}`}
            </StyledCartTotal>
            <button
              type="button"
              onClick={() => {
                setTotal(calculateTotal());
                setRedirect(true);
              }}
            >
              <ion-icon name="cart-outline"></ion-icon>
            </button>
            <button
              type="button"
              onClick={() => navigate('/sign-in')}
            >
              <ion-icon name="log-in-outline"></ion-icon>
            </button>
          </div>
        </div>
        <input
          type="text"
          onChange={({ target }) => handleSearch(target)}
          placeholder="Qual produto você procura?"
        >
        </input>
      </StyledHeader>
    </div>
  );
};

const StyledCartQuantity = styled.p`
  position: absolute;
  font-size: 18px;
  background-color: red;
  color: white;
  padding: 4px;
  border-radius: 10px 0 10px 0;
  z-index: 1;
  transform: translate(calc(100% + 8px), 100%);
  display: ${({ quantity }) => quantity > 0 ? 'block' : 'none'};
`;

const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
  
  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > div {
    font-size: 25px;

    * {
      margin: 4px;
    }

    button {
      background-color: transparent;
      border: none;
      font-size: 25px;
    }
    button:hover {
      background-color: green;
    }
    }
    img{
      margin-left: 20px;
      width: 150px;
    }
  }

  input {
    padding: 7px;
    border: 1px solid red;
    border-left-width: 4px;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 70px;
    width: 90%;
  }
`;

const StyledCartTotal = styled.p`
  position: absolute;
  font-size: 18px;
  background-color: rgb(0, 0, 0, 0.2);
  font-weight: 600;
  color: green;
  padding: 5px;
  white-space: pre;
  border-radius: 10px 0 10px 0;
  z-index: 1;
  transform: translate(calc(-100% + 10px), 10px);
  display: ${({ quantity }) => quantity > 0 ? 'block' : 'none'};
`;

export default Header;
