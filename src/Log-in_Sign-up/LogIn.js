import { useContext, useState } from "react";
import LogInSignUp from "./Log-in_Sign-up";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import UserContext from "../contexts/UserContext";

export default function LogIn(){

    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 
    const {token, setToken} = useContext(UserContext);
    let navigate = useNavigate()


function mandei(event){

    
    event.preventDefault();

        const config = {
            headers: {
                "Authorization": "Bearer token_recebido"
                
            }
        }

        let dates ={
            email, password
        }

        const request = axios.post('http://localhost:5000/', dates, config).then((date)=>{
    
            setToken(date.data.token)
            navigate("/Estrato")
        }).catch((res)=>alert(res.response.data))
}

    return(
        <>
        <LogInSignUp 
        text={"Primeira vez? Cadastre-se!"} 
        linkTo={"SingUP"}
        button={"Entrar"}
        email = {email} setEmail= {setEmail}
        password ={password} setPassword={setPassword}
        mandei = {mandei}
        />
       

        </>
    )
}