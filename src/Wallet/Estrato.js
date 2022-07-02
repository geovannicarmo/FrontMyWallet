import { Link } from "react-router-dom"
import styled from "styled-components"
import React from "react";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";
import Movement from "./Moviment";
import { useEffect, useState } from "react";

export default  function Estrato(){

    const [items, setItems] = useState([]);

    const {token} = useContext(UserContext);
   


    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


    useEffect(() => {

        axios.get('http://localhost:5000/financialMovement', config).then((request)=>{
       
        setItems(request.data)
    }).catch((res)=>alert(res.response.data))
        
    }, []);

    return(
        <StyledEstrato>
            <StyledTop>

               <h1>Olá, Fulano</h1>
               <h2>*</h2>
            </StyledTop>
            <StyledBalance>
                
               

                {
                items.length>0 
                ?
                items.map((date, index)=><Movement date = {date} key ={index} index={index}/> )
                :
                <> <h1>0</h1></>
                }
                


            </StyledBalance>

            <StyledBootons>
                <StyledBooton>
                <Link to={"/Movementacao/entrada"}> 
                    <h1>+</h1>
                    <h2>Nova</h2>
                    <h2>entrada</h2>
                </Link>
                </StyledBooton>

                <StyledBooton>
                <Link to={"/Movementacao/saida"}> 
                    <h1>-</h1>
                    <h2>Nova</h2>
                    <h2>saída</h2>
                </Link>
                </StyledBooton>

            </StyledBootons>
        </StyledEstrato>
    )
}

const StyledEstrato = styled.div`

background-color: #8C11BE;
position: fixed;
width:100%;
height :100%;
display: flex;
align-items: center;
flex-direction: column;
`

const StyledTop = styled.div`

display: flex;
justify-content: space-between;
width: 90%;
margin: 24px;
`

const StyledBalance = styled.div`
background-color: #FFFFFF;
width: 80%;
height: 70%;
`

const StyledBootons = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;


`
const StyledBooton = styled.div`
align-items: center;
background-color: #A328D6;
width: 40%;
height: 155px;
margin: 7px;
`
