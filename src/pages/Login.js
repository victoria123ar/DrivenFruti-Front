import styled from "styled-components";
import Logo from "../images/logos/bigLogo.png"
import InputLogin from "../components/InputLogin";
import { Link } from "react-router-dom";

export default function Login() {

  return (
    <Container>
      <Title>
      <img alt="logo" src={Logo} />
      </Title>
      <InputLogin />
      <Link to="/signUp" style={{ textDecoration: "none" }}>
      <p>Faça seu cadastro!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: 30px;
  margin-bottom: 40px;
  margin-left: 50px;

  img{
    width: 600px;
  }
`;