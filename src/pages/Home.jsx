import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";

function Home() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  function handleSearch(target) {
    const { value } = target;
    setSearch(value);
  };

  useEffect(() => {
    const URL = 'http://localhost:5000';

    const fetcher = async () => {
      const productsData = await axios.post(URL, {});
      const { data } = productsData;

      setProducts(data);
    }
    fetcher();

    return () => {
      console.log('Cleaning...')
    };
  }, []);

  return (
    <div>
      <StyledHeader>
        <div>
          <figure>
            <img alt="logo" src="" />
          </figure>
          <div>
            <ion-icon name="cart-outline"></ion-icon>
            <ion-icon name="log-in-outline"></ion-icon>
          </div>
        </div>
        <input
          type="text"
          value={search}
          onChange={({ target }) => handleSearch(target)}
          placeholder="Qual produto você procura?"
        >
        </input>
        <div />
      </StyledHeader>
      <StyledMain>
        <div>
          <ul>
            <li>Frutas</li>
            <li>Verduras</li>
            <li>Legumes</li>
            <li>Padaria</li>
            <li>Orgânicos</li>
            <li>Bebidas</li>
          </ul>
        </div>
        <div>
          {products.map((product, index) => <Product key={index} product={product} />)}
        </div>
      </StyledMain>
    </div>
  );
};

const StyledHeader = styled.header`
  /* background-color: #f9f9f9; */
  position: relative;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  & > div:first-of-type {
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > div {
    /* background-color: red; */
    font-size: 25px;

    * {
      margin: 8px;
    }
    }
  }

  input {
    /* background-color: red; */
    padding: 7px;
    border: 1px solid red;
    border-left-width: 4px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 50px;
    width: 90%;
  }

  & > div:nth-of-type(2) {
    min-width: 100%;
    min-height: 100px;
    position: absolute;
    filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.8);
    z-index: -2;
  }
`;

const StyledMain = styled.main`
  /* background-color: green; */
  position: relative;
  top: 100px;
  z-index: -3;

  & > div:first-of-type {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style-type: none;
      padding: 7px;

      li {
        margin: 8px;
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
