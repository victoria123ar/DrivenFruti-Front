import styled from "styled-components";

export default function InputLogin() {
  return (
    <Form>
      <input placeholder="E-mail" type="email" />
      <input placeholder="Senha" type="password" />
      <Button>Entrar</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  input {
    box-sizing: border-box;
    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    margin-bottom: 14px;
    padding: 0px 14px;
    font-size: 20px;
    color: #000000;
  }
  input::placeholder {
    font-size: 20px;
    color: #000000;
  }
`;

const Button = styled.button`
  width: 326px;
  height: 46px;
  background-color: #fb5754;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
