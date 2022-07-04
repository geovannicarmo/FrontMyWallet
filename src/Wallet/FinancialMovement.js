import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useState, useContext } from "react"
import axios from "axios"
import React from "react";
import UserContext from "../contexts/UserContext";

export default function FinancialMovement(){

    const {token} = useContext(UserContext);
    let navigate = useNavigate()


    const [valor, setValor] = useState("") 
    const [description, setDescription] = useState("") 

    const { type } = useParams()

        function send(event){
            event.preventDefault();

            
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

           

            let dates ={
                valor, description, type
            }

    
            const request = axios.post('https://my-wallet-geovanni.herokuapp.com/financialMovement', dates, config).then(()=> navigate('/Estrato')).catch((res)=>alert(res.response.data))
    
        }
    
    return(
    <StyledContainer>
            <h1>Nova {type}</h1>

    <StyledForm onSubmit={send}>

    <input placeholder="Valor" type="text" value={valor} onChange={e => setValor(e.target.value)}/>
    <input placeholder="Descrição" type="text" value={description} onChange={e => setDescription(e.target.value)}/>

<button type="submit"> Salvar {type} </button>


</StyledForm>

        
</StyledContainer>
    )
}

const StyledForm = styled.form`
display: flex;
flex-direction: column;
margin-top: 60px;
width: 80%;


input{
    margin-top: 10px;
    height: 30px;

}

button{
    margin-top: 10px;
    height: 30px;
    background-color: #FFFFFF;
}
`

const StyledContainer = styled.div`

background-color: #8C11BE;
position: fixed;
width:100%;
height :100%;
display: flex;
align-items: center;
flex-direction: column;


h1{
    font-size: 22px;
    color: #FFFFFF;
    position: fixed;
    top: 10px;
    left: 10px;
    margin-top: 60;
    
}
`