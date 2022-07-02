import { useState } from "react";
import LogInSignUp from "./Log-in_Sign-up"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SingUp(){

    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 
    const [name, setName] = useState("") 
    const [passwordConfirm, setPasswordConfirm] = useState("") 

    let navigate = useNavigate();
    
    function mandei(event){
        event.preventDefault();

        const config = {
            headers: {
                "Authorization": "Bearer token_recebido"
            }
        }

            let dates={email, password, passwordConfirm, name}

            const request = axios.post('http://localhost:5000/signUp', dates, config).then((res)=>{
                if(res.status===201){
                    console.log(res.data)
                    navigate("/")
                }
            }).catch((res)=>alert(res.response.data))
    }

    return (
        <>
        <LogInSignUp 
        text={"Já tem uma conta? Entre agora!"} 
        linkTo={"/"}
        button={"Cadastrar"}
        email = {email} setEmail= {setEmail}
        password ={password} setPassword={setPassword}
        name = {name} setName= {setName}
        passwordConfirm ={passwordConfirm} setPasswordConfirm={setPasswordConfirm}
        mandei = {mandei}
        />
        
        </>
    )
}