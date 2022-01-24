import React from 'react'
import styled from "styled-components"
const Home = () => {
  return (
    <Container>
        <Wrapper>
        This is Home Page
        </Wrapper>
    </Container>
  )
}

export default Home

const Wrapper = styled.div``
const Container = styled.div`
width: 100%;
background-color:#eee;
color: white;
height: 100%;
min-height: calc(100vh - 70px);
display: flex;

`
