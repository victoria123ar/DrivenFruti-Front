import styled from "styled-components";

export const SignUpLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: lightgray;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 25%;
    height: 80%;
    background-color: #FFFFFF;
    border-radius: 30px;
    padding: 10px;
    overflow-y: auto;

    @media (max-width: 800px){
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }

    img{
        width: 75%;

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
        color: #49AD0D;
        font-size: 20px;

        @media (max-width: 800px){
            height: 45px;
        }
    }
`