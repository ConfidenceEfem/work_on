import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
const Header = () => {
  return (
    <Container>
      <Wrapper>
      <Logo>Auth Logo</Logo>
      <ButtonsHolder>
      <Buttons to="/register">Home</Buttons>
      <Buttons to="/register">Register</Buttons>
      <Buttons to="/login">Login</Buttons>
      <Buttons to="/create">Create Store</Buttons>
      <Buttons cl bg to="/register">Logout</Buttons>
      </ButtonsHolder>
      </Wrapper>
    </Container>
  )
}

export default Header

const Buttons = styled(NavLink)`
padding: 9px 20px;
transition: all 350ms;
text-transform: uppercase;
font-size: 13px;
text-decoration: none;
color: white;
margin: 0 5px;
background-color: ${({bg})=>bg? "rgb(255,255,255,0.6)": "#01007c"};
:hover{
    background-color: rgb(255,255,255,0.6);
    border-radius: 2px;
    cursor: pointer;
}
`
const ButtonsHolder = styled.div`
display: flex;
align-items: center;
`
const Logo = styled.div`
font-size: 16px;
font-family: hobo std;
color: white;
font-weight: bold;
display:flex;
flex: 1;
`
const Wrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
` 
const Container = styled.div`
width: 100%;
height: 70px;
background-color: #01007c;
justify-content: center;
align-items: center;
display: flex;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
color: white;
` 
