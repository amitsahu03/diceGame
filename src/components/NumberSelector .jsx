import { useState } from "react"
import styled from "styled-components"

const NumberSelector  = (
    {error ,setError,  SelectedNumber, setSelectedNumber}
) => {
    const array=[1,2,3,4,5,6]

    const numberSelectorHandler = (value)=>{
        setSelectedNumber(value)
        setError("")
    }
    
  return (
    <NumberSelectorConatiner>
        <p className="error">{error}</p>
        <div className="flex">
        {array.map((value,i)=>(
        <Box 
        isSelected = {
            value === SelectedNumber
        }
        key={i} onClick={()=>numberSelectorHandler(value)}>
            {value}
            </Box>
        ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorConatiner>
  )
}

export default NumberSelector ;

const Box = styled.div`
    cursor: pointer;
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ?  "white" : "black")};

`
const NumberSelectorConatiner = styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .error{
        color: red;
    }
`