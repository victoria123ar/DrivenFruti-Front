import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SlLogin, SlLogout } from "react-icons/sl";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ userInfos, Logo, handleSearch, total }) {
  const [icon, setIcon] = useState("logged");
  const navigate = useNavigate();

  const changeIcon = (state) => {
    if (state === "logged") {
      return "logout";
    }
    return "login";
  };

  return (
    <StyledHeader>
      <Figure>
        <img alt="logo" src={Logo} />
      </Figure>
      <Input
        type="text"
        onChange={({ target }) => handleSearch(target)}
        placeholder="Qual produto você procura?"
      ></Input>
      <Icons>
        <StyledCartQuantity quantity={userInfos.cartIds.length}>
          {userInfos.cartIds.length > 0 && userInfos.cartIds.length}
        </StyledCartQuantity>
        <StyledCartTotal quantity={userInfos.cartIds.length}>
          {`R$ ${String(Number(total).toFixed(2)).replace(".", ",")}`}
        </StyledCartTotal>
        <Link to="/sign-in" style={{ textDecoration: "none" }}>
          <button
            type="button"
            onClick={() => setIcon((old) => changeIcon(old))}
          >
            {icon === "logged" ? <SlLogin /> : <SlLogout />}
          </button>
        </Link>
        <button type="button" onClick={() => navigate("/cart")}>
          <ion-icon name="cart-outline"></ion-icon>
        </button>
      </Icons>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  box-sizing: border-box;
  background-color: #ECF4EF;
  position: relative;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
  padding: 10px 80px;
  @media (max-width: 600px) {
    padding: 10px 30px;
  }
`;

const Figure = styled.div`
  img{
    width: 200px; 
  }
  @media (max-width: 620px) {
    img{
    width: 150px; 
  }
  }
  @media (max-width: 450px) {
    img{
    width: 100px; 
  }
  }
  `;

const Input = styled.input`
    padding: 7px;
    border: 1px solid #fb5754;
    box-shadow: 6px 6px rgba(251, 87, 84, 0.1);
    border-radius: 8px;
    width: 40%;
    font-size: 14px;
    color: #fb5754;
    ::placeholder {
    font-size: 14px;
    color: #fb5754;
  }
  @media (max-width: 800px) {
    width: 100%; 
  }

`

const Icons = styled.div`
button {
    border: none;
    font-size: 22px;
    cursor: pointer;
    background-color: #ECF4EF;
  }

  button:hover {
    font-size: 26px;
  }
  width: 140px;
display: flex;
justify-content: space-around
`;

const StyledCartQuantity = styled.p`
width: 22px;
height: 22px;
text-align: center;
  position: absolute;
  font-size: 14px;
  background-color: rgb(251, 87, 84);
  color: white;
  padding: 4px;
  border-radius: 10px;
  z-index: 1;
  top: 20px;
  right: 110px;
  display: ${({ quantity }) => (quantity > 0 ? "block" : "none")};
  @media (max-width: 800px) {
    right: 90px;
  }
  @media (max-width: 620px) {
    top: 10px;
  }
  @media (max-width: 600px) {
    right: 40px;
  }
  @media (max-width: 450px) {
    top: 0px;
  }
  `;

const StyledCartTotal = styled.p`
  position: absolute;
  font-size: 14px;
  background-color: rgb(251, 87, 84, 0.6);
  font-weight: 600;
  color: #fff;
  padding: 5px;
  white-space: pre;
  border-radius: 10px 0 10px 0;
  z-index: 1;
  top: 40px;
  right: 40px;
  display: ${({ quantity }) => (quantity > 0 ? "block" : "none")};
  @media (max-width: 800px) {
    right: 30px;
  }
  @media (max-width: 620px) {
    top: 30px;
  }
  @media (max-width: 600px) {
    top: 55px;
    right: 20px;
  }
  @media (max-width: 450px) {
    top: 40px;
  }
  `;

export default Header;
