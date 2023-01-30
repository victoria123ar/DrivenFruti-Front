import styled from "styled-components";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function InputLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  function login(e) {
    e.preventDefault();
    setDisabled(true);

    const postData = {
      email: email,
      password: password,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/sign-in`, postData)
      .then((resposta) => {
        navigate("/");
      })
      .catch((erro) => {
/*         if(erro.response.status === 401){
          alert('E-mail ou senha inválidos!');
        }else{ */
          alert(erro.message);
/*         } */
        
        setDisabled(false);
      });
  }

  return (
    <Form onSubmit={(e) => login(e)}>
      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={!disabled ? false : true}
      />
      <input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={!disabled ? false : true}
      />
      <Button disabled={!disabled ? false : true}>
        <CiLogin />
        <p>Entrar</p>
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    border: 1px solid #fb5754;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 18px;
    color: #49ad0d;
    font-size: 22px;
    margin-bottom: 14px;

    @media (max-width: 1315px) {
      width: 80%;
    }

    @media (max-width: 800px) {
      height: 45px;
    }
  }
  input::placeholder {
    font-size: 22px;
    color: #fb5754;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 55px;
  background-color: #fb5754;
  border: none;
  border-radius: 8px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-left: 10px;
  }

  @media (max-width: 1315px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    height: 45px;
  }
`;
