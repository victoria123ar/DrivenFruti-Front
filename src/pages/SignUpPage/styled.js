import styled from "styled-components";

export const SignUpLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #C5FF98;
    font-family: 'Roboto', sans-serif;
`
export const Message = styled.aside`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    background-color: #49AD0D;
    position: absolute;
    opacity: 0.9;
    top: 0;
    right: 0;
    left: ${props => props.left};
    transition: all 500ms ease-in-out;
    gap: 20px;

        @media (min-width: 800px){
            height: 100px;
        }

        img{
            height: 90px !important;
            width: auto !important;
        }

        p{
            font-size: 25px;
            color: #FFFFFF;
            font-weight: 800;
        }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: space-between;
    width: 25%;
    height: 80%;
    background-color: #FFFFFF;
    border-radius: 30px;
    padding: 10px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 800px){
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }

    img{
        width: 75%;
        margin-top: 15px;

        @media (max-width: 800px){
            width: 85%;
        }
    }


`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 20px 0;

    form{
        gap: 15px;
        width: 100%;

        @media (max-width: 800px){
            width: 100%;
        }

        button{
            margin-top: 10px;
            width: 100%;
            height: 55px;
            border-radius: 8px;
            background-color: #49AD0D;
            border: none;
            gap: 10px;
            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFFFFF;
            font-size: 25px;

            p{
                font-size: 20px;
            }

            @media (max-width: 800px){
                height: 45px;
            }
        }
    }

    input{
        width: 100%;
        height: 65px;
        border-radius: 8px;
        background: #FFFFFF;
        padding: 18px;
        border: 1px solid #C5FF98;
        color: rgba(80,103,91);
        font-size: 22px;
        cursor: text;

        &:focus {
            outline: 2.5px solid #49AD0D;
        }

        &::placeholder{
            color: gray;
        }

        @media (max-width: 800px){
            height: 55px;
        }
    }
    
    //"Já tenho uma conta!"
    button{
        margin-top: 10px;
        width: 100%;
        height: 55px;
        border-radius: 8px;
        background-color: #FFFFFF;
        border: none;
        gap: 10px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        color: #FB5754;
        font-size: 20px;

        @media (max-width: 800px){
            height: 45px;
        }
    }
`