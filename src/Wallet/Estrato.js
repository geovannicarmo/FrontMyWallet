import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import React from "react";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";
import Movement from "./Moviment";
import { useEffect, useState } from "react";
import { BiLogOut, BiPlusCircle, BiMinusCircle } from "react-icons/bi";

export default  function Estrato(){

    const [items, setItems] = useState([]);

    const [name, setName] = useState([]);

    const {token} = useContext(UserContext);

    let navigate = useNavigate()


   


    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


    useEffect(() => {

        axios.get('https://my-wallet-geovanni.herokuapp.com/financialMovement', config).then((request)=>{
       
        setItems(request.data)
    }).catch((res)=>alert(res.response.data))
        
    }, []);



    console.log(items);
    let sun=0
    for(let i=0; i<items.length; i++){
        if(items[i].type==="entrada"){
            sun+=parseFloat(items[i].valor);
        }
        else{
            sun-=parseFloat(items[i].valor);
        }
    }

    console.log(sun);


    function logOut(){

        axios.post('https://my-wallet-geovanni.herokuapp.com/logOut', {data:"02"}, config).then((request)=>{
        alert(request.data)
           
            navigate('/')
        }).catch((res)=>alert(res.response.data))
    }


//    setInterval(()=>{

//     axios.post('https://my-wallet-geovanni.herokuapp.com/status', {data:"02"}, config).then((request)=>{
             
//     }).catch((res)=>alert(res.response.data))
        
//     }, 5000)

    return(
        <StyledEstrato>
            <StyledTop>

               <h1>Olá</h1>
               
               <BiLogOut onClick={logOut}/>
            </StyledTop>
            <StyledBalance>
                
               

                {
                    
                items.length>0 
                ?
                items.map((date, index)=><Movement 
                date = {date} 
                key ={index} 
                index={index}
                 /> )
                 :
                 
                 <> </>
                 
                }

                <h3>Saldo: {sun}</h3>
            </StyledBalance>

            <StyledBootons>
                <StyledBooton>
                <Link to={"/Movementacao/entrada"}> 
                    <BiPlusCircle/>
                    <h2>Nova</h2>
                    <h2>entrada</h2>
                </Link>
                </StyledBooton>

                <StyledBooton>
                <Link to={"/Movementacao/saida"}> 
                    <BiMinusCircle/>
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
width: 90%;
height: 70%;


#sun{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}
`

const StyledBootons = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;


`
const StyledBooton = styled.div`
align-items: center;
background-color: #A328D6;
width: 40%;
height: 120px;
margin: 7px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 12px;
`
