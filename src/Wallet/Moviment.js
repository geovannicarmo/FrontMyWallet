
import styled from "styled-components"

export default function Movement({date, index}){

    console.log(date)
    
    let { type, valor, description, day} = date
   
     valor = parseFloat(Math.abs(valor).toFixed(2))

    return(
        <MovimentStyled habilitado={type}>
            <h1> {day}</h1>
            <h1> {description}</h1>
            <h2> {valor} </h2>
        </MovimentStyled>
    )

    
}

const MovimentStyled = styled.div`
display: flex;
justify-content: space-between;
margin: 12px;

h2{
    color: ${props => props.habilitado!=="entrada" ? "red" : "#8FC549"};
}
   

`


