import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Context from "../context/Context";

function Home() {
  const [filter, setFilter] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');

  const { userInfos } = useContext(Context);

  function handleSearch(target) {
    const { value } = target;
    const productsFiltered = products
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

    const productsFiltered = products
      .filter(({ category }) => category === name);

    console.log(name, productsFiltered)

    setCategory(name);
    setFilter(productsFiltered);
  };

  useEffect(() => {
    const URL = 'http://localhost:5000';
    const controller = new AbortController();
    const signal = controller.signal;

    const fetcher = async () => {
      const productsData = await axios.post(URL, {}, { signal });
      const { data } = productsData;

      data.sort(() => .5 - Math.random()); // shuffle array

      data.forEach((product) => product.quantity = 0);

      console.log(data)

      setProducts(data);
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
            <img alt="logo" src="" />
          </figure>
          <div>
            <StyledCartQuantity quantity={userInfos.cartIds.length}>
              {userInfos.cartIds.length > 0 && userInfos.cartIds.length}
            </StyledCartQuantity>
            <ion-icon name="cart-outline"></ion-icon>
            <ion-icon name="log-in-outline"></ion-icon>
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
              ? products :
              filter).map((product, index) => <Product key={index} product={product} />)
          }
        </div>
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
  transform: translate(100%, 50%);
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
    border-radius: 8px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 50px;
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
  /* background-color: green; */
  position: relative;
  top: 100px;

  & > div:first-of-type {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style-type: none;
      padding: 7px;
      overflow-x: scroll;
      /* scrollbar-width: none; */

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
