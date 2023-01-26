import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Logo from "../images/logos/logo.png";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

function Home() {
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState('all');

  const { userInfos, setGlobalProducts, globalProducts, total, setTotal } = useContext(Context);

  const navigate = useNavigate();

  function calculateTotal() {
    const cartProducts = userInfos.cartIds
      .map((id) => globalProducts.find(({ productId }) => productId === id));

    const total = cartProducts.reduce((acc, curr) => acc + curr.price, 0);

    setTotal(total.toFixed(2));
  };

  function handleSearch(target) {
    const { value } = target;
    const productsFiltered = globalProducts
      .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));

    setFilter(productsFiltered);
  };

  function selectByCategory(target) {
    const { name } = target;

    if (name === 'all') {
      setCategory('all');
      setFilter([]);
      return;
    };

    const productsFiltered = globalProducts
      .filter(({ category }) => category === name);

    setCategory(name);
    setFilter(productsFiltered);
  };

  useEffect(() => {
    calculateTotal();
  }, [userInfos.cartIds.length]);

  useEffect(() => {
    const URL = 'http://localhost:5000';
    const controller = new AbortController();
    const signal = controller.signal;

    const fetcher = async () => {
      const productsData = await axios.post(URL, {}, { signal });
      const { data } = productsData;

      data.sort(() => .5 - Math.random()); // shuffle array

      data.forEach((product) => product.quantity = 0);

      setGlobalProducts(data);
    }
    fetcher();

    return () => {
      console.log('Cleaning...');
      controller.abort();
    };
  }, []);

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
              {`R$ ${String(Number(total).toFixed(2)).replace('.', ',')}`}
            </StyledCartTotal>
            <button
              type="button"
              onClick={() => navigate('/cart')}
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
      <StyledMain>
        <div>
          <ul>
            <StyledCategory
              type="button"
              name="all"
              category={category}
              onClick={({ target }) => selectByCategory(target)}
            >
              Todos
            </StyledCategory>
            <StyledCategory
              type="button"
              name="fruits"
              category={category}
              onClick={({ target }) => selectByCategory(target)}
            >
              Frutas
            </StyledCategory>
            <StyledCategory
              type="button"
              name="greens"
              category={category}
              onClick={({ target }) => selectByCategory(target)}
            >
              Verduras
            </StyledCategory>
            <StyledCategory
              type="button"
              name="vegetables"
              category={category}
              onClick={({ target }) => selectByCategory(target)}
            >
              Legumes
            </StyledCategory>
            <StyledCategory
              type="button"
              name="bakery"
              category={category}
              onClick={({ target }) => selectByCategory(target)}
            >
              Padaria
            </StyledCategory>
            <StyledCategory
              type="button"
              name="organics"
              category={category}
              onClick={({ target }) => selectByCategory(target)}
            >
              Orgânicos
            </StyledCategory>
            <StyledCategory
              type="button"
              name="drinks"
              category={category}
              onClick={({ target }) => selectByCategory(target)}
            >
              Bebidas
            </StyledCategory>
          </ul>
        </div>
        <div>
          {
            (filter.length === 0
              ? globalProducts :
              filter).map((product, index) => <Product key={index} product={product} />)
          }
        </div>
        <button
          type="button"
          onClick={() => {
            const link = encodeURIComponent(`Olá, faça seu pedido.`);

            window.location.href = "https://wa.me/+5521995784778?text=" + link;
          }}
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
        </button>
      </StyledMain>
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

const StyledCategory = styled.button`
  margin: 8px;
  background-color: transparent;
  border: none;
  font-weight: 600;
  border-bottom: ${(({ name, category }) => (name === category) ? '1px solid red' : 'none')};
`;

const StyledMain = styled.main`
  position: relative;
  top: 100px;

  & > button {
    position: fixed;
    bottom: 50px;
    right: 0;
    font-size: 25px;
    color: white;
    background-color: green;
    border: none;
    border-radius: 50%;
    padding: 10px;
    display: flex;
  } 

  & > div:first-of-type {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style-type: none;
      padding: 7px;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  & > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

`;

export default Home;
