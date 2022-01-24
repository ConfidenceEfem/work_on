import React from 'react'
import styled from "styled-components"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {addcount, minusCount} from "./MainGlobal"
import { addName, addEmail } from './InputReducer'


const Home = () => {
    const dispatch = useDispatch()
    const myValue = useSelector((state)=> state.myReducer.value);
    const onAdd = ()=>{
        dispatch(addcount())
    }
    const onMinus = ()=>{
        dispatch(minusCount())
    }
  return (
    <Container>
      <Wrapper>
      <input 
      onChange={(e)=>{
          dispatch(addName(e.target.value))
      }}/>
      <Number>{myValue}</Number>
      <Button>
        <Button1 bg="red" onClick={onMinus}>-</Button1>
        <Button1 bg="blue" onClick={onAdd}>+</Button1>
      </Button>
      </Wrapper>
    </Container>
  )
}

export default Home

const Button1 = styled.div`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: ${({bg})=>bg};
margin: 0 50px;
cursor: pointer;
`
const Button = styled.div`
display: flex;

`
const Number = styled.div`
font-size: 50px;
margin-bottom: 40px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`
