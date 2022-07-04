import styled from "styled-components"
import { Link } from "react-router-dom"


export default function LogInSignUp({ text, linkTo, button, email, setEmail, password, setPassword, mandei, name, setName, passwordConfirm, setPasswordConfirm}){




    return(
        <StyledLogInSignUp>

            <h1>MyWallet</h1>

        <StyledForm onSubmit={mandei}>

            {
                name===undefined ? <></> :
                 <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>

            }

            <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            {
                passwordConfirm===undefined ? <></> 
                : <input placeholder="Confirme a senha" type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>

            }
            
            <button type="submit"> {button} </button>


        </StyledForm>
            

            <StyledChangeDisplay>

                <Link to={linkTo}>
                <h2>{text}</h2>    
                     </Link>
                
            </StyledChangeDisplay>
            
        </StyledLogInSignUp>
    )
}





const StyledLogInSignUp = styled.div`

background-color: #8C11BE;
position: fixed;
width:100%;
height :100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
    font-size: 32px;
    color: #FFFFFF;
    
}
`

const StyledChangeDisplay = styled.div`

height:18px;
margin-top: 32px;
color: #FFFFFF;
font-size: 15px;

a{
    text-decoration: none;
    color: #FFFFFF;
}
`
const StyledForm = styled.form`


display: flex;
flex-direction: column;



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