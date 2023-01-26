import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContainerInputs, SignUpLayout, Container} from "./styled";
import Messages from "../../components/Messages";
import logo from "../../assets/logos/bigLogoSticker.png"

import happy from "../../assets/pet/pet2Sticker.png"
import confused from "../../assets/pet/pet3Sticker.png" 

export default function SignUpPage(){
    const [formData, setFormData] = useState({name:'', email:'', password:''})
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const [pet, setPet] = useState(null)
    const [background, setBackground] = useState(null) 
    const [msg, setMsg] = useState(null)
    const [left, setLeft] = useState("1000px")

    function changeMessage(res){
      if(res === "created"){
        setPet(happy)
        setBackground("#49AD0D")
        setMsg("Cadastro concluido!")
        setLeft("0")
      }

      if(res === "ErrPassword"){
        setPet(confused)
        setBackground("#FB5754")
        setMsg("Senhas não se coincidem")
        setLeft("0")
      }

      if(res === "exit"){
        setLeft("1000px")
      }
    }

    function handleChange(e){
      setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
      e.preventDefault()
      setLoading(true)

      if(confirmPassword === formData.password){
          setLoading(false)
          changeMessage("created")


        }else{
          changeMessage("ErrPassword")
          setLoading(false)
        }

        setTimeout( () => changeMessage("exit"), 1700)
    }

    return(
        <SignUpLayout>
            <Container>
                <Messages pet={pet} background={background} msg={msg} left={left}/>

                <img src={logo} />

                <ContainerInputs>
                    <form onSubmit={handleSubmit}>
                      <input
                          type="text"
                          placeholder="Nome"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={loading}
                      />

                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                      />

                      <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                      />

                      <input
                        type="password"
                        placeholder="Confirme sua senha"
                        name="ConfirmPassword"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        disabled={loading}
                      />

                      <button>
                        <ion-icon name="person-add-outline"></ion-icon>
                        <p>Cadastrar</p>
                      </button>
                    </form>

                    <Link to="/sign-in">
                      <button>
                        <ion-icon name="log-in-outline"></ion-icon>
                        <p>Já tenho uma conta!</p>
                      </button>
                    </Link>
        </ContainerInputs>
      </Container>
    </SignUpLayout>
  )
}
