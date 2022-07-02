import { type } from "@testing-library/user-event/dist/type"
import styled from "styled-components"

export default function Movement({date, index}){

const { type, valor, description} = date

    return(
        <MovimentStyled>
            <h1> {type}</h1>
            <h1> {description}</h1>
            <h1> {valor}</h1>
        </MovimentStyled>
    )

    
}

const MovimentStyled = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
`
