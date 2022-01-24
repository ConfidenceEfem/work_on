import React from 'react'
import styled from "styled-components"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios"
const Register = () => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup.ref("password"), null]),
    })

    const {register, handleSubmit, formState:{errors}, reset} = useForm({resolver: yupResolver(schema)})

    const done = handleSubmit((data)=>{
        console.log(data)
        reset()
    })
  return (
    <Container>
      <Wrapper>
        <Card>
        <Text>Create an Account</Text>
        <InputsHolder onSubmit={done}>
        <Error><span>{errors?.name?.message}</span></Error>
        <Inputs placeholder="Enter Username"
        {...register("name")}/>
        <Error><span>{errors?.email?.message}</span></Error>
        <Inputs placeholder="Enter Email"
        {...register("email")}/>
        <Error><span>{errors?.password?.message}</span></Error>
        <Inputs placeholder="Enter Password"
        {...register("password")}/>
        <Error><span>{errors?.confirm?.message}</span></Error>
        <Inputs placeholder="Confirm Password"
        {...register("confirm")}/>
        <Button type="submit">Register</Button>
        </InputsHolder>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Register

const Error = styled.div`
font-size:10px;
color: red;
font-weight: bold;
display: flex;
width: 100%;
`
const Button = styled.button`
padding: 12px 25px;
transition: all 350ms;
text-transform: uppercase;
font-size: 12px;
margin: 20px 0;
transform: scale(1);
transition: all 350ms;
background-color: #01007c;
color: white;
border: none;
outline: none;
:hover{
    transform: scale(1.02);
    color: white;
    cursor: pointer;

}
`
const Inputs = styled.input`
width: 100%;
margin: 5px 0;
height: 35px;
outline: none;
::placeholder{
    font-size: 12px;
}
`
const InputsHolder = styled.form`
display: flex;
flex-direction: column;
width: 90%;
align-items: center;
margin-top: 20px;
`
const Text = styled.div`
font-weight:bold;
font-size: 15px;
font-family: Arial, Helvetica, sans-serif;
margin-top: 20px;
`
const Card = styled.div`
background-color: white;
width: 400px;
min-height: 300px;
min-height: 100%auto;
display: flex;
align-items: center;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
` 
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
` 
const Container = styled.div`
width: 100%;
background-color:#eee;
color: #01007c;
height: 100%;
justify-content: center;
align-items: center;
min-height: calc(100vh - 70px);
display: flex;
`
