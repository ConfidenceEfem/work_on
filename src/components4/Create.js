import React from 'react'
import styled from "styled-components"
const Create = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
            <Image/>
            <Upload htmlFor="pix">Upload Image</Upload>
            <input type="file" id="pix" style={{display: "none"}}/>
            <InputsHolder>
                <Inputs placeholder="Enter tags"/>
                <Inputs placeholder="Enter price"/>
                <Button>Create</Button>
            </InputsHolder>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Create

const Button = styled.button`
height: 35px;
border: none;
outline: none;
background-color: #01007c;
color: white;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
margin-top: 20px;
`
const Inputs = styled.input`
margin: 5px 0;
width: 300px;
height: 35px;
::placeholder{
    font-size: 12px;
}
outline: none;
`
const InputsHolder = styled.div`
display: flex;
flex-direction: column;

`
const Upload = styled.label`
font-size: 13px;
text-transform: uppercase;
padding: 10px 50px;
border-radius: 20px;
background-color: #01007c;
color: white;
transform: scale(1);
transition: all 350ms;
margin-bottom: 20px;
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
`
const Image = styled.img`
width: 200px;
height: 200px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
margin-bottom: 25px;
`
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
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
