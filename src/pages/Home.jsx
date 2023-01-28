import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Logo from "../images/logos/logo.png";
import Context from "../context/Context";
import Header from "../components/Header";

function Home() {
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState('all');

  const {
    userInfos,
    setUserInfos,
    setGlobalProducts,
    globalProducts,
    isLoggedIn,
    setIsLoggedIn,
  } = useContext(Context);

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
    const token = localStorage.getItem('token');
    const URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    const controller = new AbortController();
    const signal = controller.signal;
    const config = {
      headers: {
        Authorization: token,
      }
    }

    const fetcher = async () => {

      try {
        if (token) {
          const userData = await axios.get(`${URL}/cart`, config, { signal });

          return setUserInfos((prevState) => {
            return ({
              ...prevState,
              cartIds: userData.data.cartIds,
            });
          });
        }
      } catch (error) {
        console.log('Erro: ', error);
        throw new Error(error);
      }
    }
    fetcher();

    return () => {
      console.log('Cleaning...');
      controller.abort();
    };
  }, [isLoggedIn]);

  useEffect(() => {
    const URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    const controller = new AbortController();
    const signal = controller.signal;
    const config = {
      headers: {
        Authorization: userInfos.token,
      }
    }

    const fetcher = async () => {
      try {
        const token = localStorage.getItem('token');
        const productsData = await axios.post(URL, {}, { signal });
        const { data } = productsData;

        data.sort(() => .5 - Math.random()); // shuffle array
        data.forEach((product) => product.quantity = 0);

        setGlobalProducts(data);

        if (token) {
          // setUserInfos((prevState) => ({
          //   ...prevState,
          //   token,
          // }));
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }

      } catch (error) {
        console.log('Erro: ', error);
        throw new Error(error);
      }
    }
    fetcher();

    return () => {
      console.log('Cleaning...');
      controller.abort();
    };
  }, []);

  const categories = [
    ['all', 'Todos'],
    ['fruits', 'Frutas'],
    ['greens', 'Verduras'],
    ['vegetables', 'Legumes'],
    ['bakery', 'Padaria'],
    ['organics', 'Orgânicos'],
    ['drinks', 'Bebidas'],
  ];

  return (
    <div>
      <Header
        Logo={Logo}
        handleSearch={handleSearch}
        userInfos={userInfos}
      />
      <StyledMain>
        <div>
          <ul>
            {categories.map((categoryType) =>
              <StyledCategory
                key={categoryType[0]}
                type="button"
                name={categoryType[0]}
                category={category}
                onClick={({ target }) => selectByCategory(target)}
              >
                {categoryType[1]}
              </StyledCategory>
            )}
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
