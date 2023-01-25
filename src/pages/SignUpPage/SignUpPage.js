import { ContainerInputs, SignUpLayout, Container } from "./styled";
import logo from "../../assets/logos/bigLogoSticker.png"

export default function SignUpPage() {
  return (
    <SignUpLayout>
      <Container>
        <img src={logo} />

        <ContainerInputs>
          <form>
            <input
              type="text"
              placeholder="Nome"
              name="name"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
            />

            <input
              type="password"
              placeholder="Senha"
              name="password"
            />

            <input
              type="password"
              placeholder="Confirme sua senha"
              name="ConfirmPassword"
            />

            <button>
              <ion-icon name="log-in-outline"></ion-icon>
              <p>Cadastrar</p>
            </button>
          </form>

          <button>
            <ion-icon name="person-outline"></ion-icon>
            <p>Já tenho uma conta!</p>
          </button>
        </ContainerInputs>
      </Container>
    </SignUpLayout>
  )
}
