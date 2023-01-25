import { useState } from "react";
import { ContainerInputs, SignUpLayout, Container, Message} from "./styled";
import logo from "../../assets/logos/bigLogoSticker.png"
import pet from "../../assets/logos/petSticker.png"

export default function SignUpPage(){
    const [hidden, setHidden] = useState("1000px");

    function handleSubmit(e){
        e.preventDefault()
        setHidden("0px")
    }

    return(
        <SignUpLayout>
            <Container>
                <Message left={hidden}>
                    <img src={pet}/>
                    <p>Cadastro concluido!</p>
                </Message>
                <img src={logo} />
                
                <ContainerInputs>
                    <form onSubmit={handleSubmit}>
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