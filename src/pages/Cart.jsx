import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import Context from "../context/Context";

function Cart() {
  const { userInfos, globalProducts, total, setTotal } = useContext(Context);
  const [groups, setGroups] = useState([]);

  function calculateTotal() {
    const cartProducts = userInfos.cartIds
      .map((id) => globalProducts.find(({ productId }) => productId === id));

    const total = cartProducts.reduce((acc, curr) => acc + curr.price, 0);

    setTotal(total.toFixed(2));
  };

  function groupItems() {
    const { cartIds } = userInfos;
    const groups = {};

    cartIds.forEach((id) => {
      const keys = Object.keys(groups);

      if (keys.includes(id)) return;

      groups[id] = cartIds.filter((cartId) => cartId === id).length;
    });

    setGroups(groups);
  };

  useEffect(() => groupItems(), []);
  useEffect(() => calculateTotal(), [userInfos.cartIds.length]);

  return (
    <StyledCart>
      <StyledHeader>
        <h3>Meu Carrinho</h3>
        <ion-icon name="close-outline"></ion-icon>
      </StyledHeader>
      <StyledMain>
        <ul>
          {Object.entries(groups).map((entry) => <CartItem entry={entry} />)}
        </ul>
        <div>
          <button
            type="button"
          >
            Adicionar mais itens ao carrinho
          </button>
          <button
            type="button"
          >
            <ion-icon name="trash-outline"></ion-icon>
            Limpar carrinho
          </button>
        </div>
      </StyledMain>
      <StyledFooter>
        <div>
          <p>Preço total</p>
          <h3>{`R$ ${String(Number(total).toFixed(2)).replace('.', ',')}`}</h3>
        </div>
        <button
          type="button"
        >
          Criar conta
        </button>
      </StyledFooter>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  position: relative;
`;

const StyledMain = styled.main`
  position: absolute;
  top: 50px;
  padding: 30px;
  height: min-content;
  max-height: calc(100vh - 190px);
  overflow-y: scroll;

  & > div:first-of-type {
    /* background-color: red; */
    padding: 30px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & button {
      margin: 10px;
      background-color: transparent;
      border: none;
      font-weight: 600;

      &:first-of-type {
        color: green;

        & ~ button {
          color: red;
          display: flex;
          align-items: center;
          * {
            margin: 8px;
          }
        }
      }
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  min-height: 50px;
  padding: 15px;
  background-color: rgba(240, 240, 240, 0.8);
  z-index: 1;
`;

const StyledFooter = styled.footer`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px;
  z-index: 1;
  min-height: 140px;

  & div {
    width: 70%;
    background-color: rgb(230, 230, 230);
    display: flex;
    padding: 10px;
    border-radius: 6px;
    justify-content: space-between;
    margin-bottom: 15px;

    h3 {
      font-weight: 600;
      color: green;
    }
  }

  & button {
    width: 70%;
    background-color: rgb(2, 126, 4);
    color: white;
    padding: 10px;
    border-radius: 8px;
    font-weight: 800;
  }
`;


export default Cart;
