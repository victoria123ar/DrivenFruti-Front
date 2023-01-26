import styled from "styled-components"

export default function Messages(props){
    const {left, background, pet, msg} = props
    return(
        <Message left={left} background={background}>
            <img src={pet}/>
            <p>{msg}</p>
        </Message>
    )
}

const Message = styled.aside`
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;
    background-color: ${props => props.background};
    position: absolute;
    opacity: 0.9;
    top: 0;
    right: 0;
    left: ${props => props.left};
    transition: all 500ms ease-in-out;
    gap: 20px;
    text-align: center;

        @media (min-width: 800px){
            height: 100px;
        }

        img{
            height: 90px !important;
            width: auto !important;
            margin: auto 0 !important;
        }

        p{
            font-size: 25px;
            color: #FFFFFF;
            font-weight: 800;
        }
`
