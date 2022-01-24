import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addData } from './BackendReducer'



const InputCard = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state)=>state.backendstore.dataFile)
    const [name, setName ] = useState("")
    const [email, setEmail] = useState("")

    const [data, setData] = useState([])

    const fetchData = async () =>{
        const res = await axios.get("http://localhost:2000/api/")
        if(res){
            setData(res.data.data)
            dispatch(addData(res.data.data))
        }
        console.log(data)
    }

    const postData = async ()=>{
        const file = {name, email}
        await axios.post("http://localhost:2000/api/", file)
    }
    useEffect(()=>{
fetchData()
    },[])
  return (
    <Container>
      <Wrapper>
      <Input placeholder="Enter your Name"
      value={name}
      onChange={(e)=>{
          setName(e.target.value)
      }}/>
      <Input placeholder="Enter your email"
      value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <Button onClick={()=>{
          postData()
          window.location.reload()
      }}>Submit</Button>
      </Wrapper>
      <DisplayCard>
        {selector.map((props)=>(
            <Card>
        <Name>{props.name}</Name>
        <Email>{props.email}</Email>
        </Card>
        ))}
     
      </DisplayCard>
    </Container>
  )
}

export default InputCard

const Email = styled.div`
font-size: 13px;
`
const Card = styled.div`
width: 100%auto;
padding: 0 15px;
height: 80px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: scale(1);
transition: all 350ms;
margin: 10px;
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const DisplayCard = styled.div`
width: 95%;
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const Name = styled.div`
font-weight: bold;
margin-bottom: 10px;
font-size: 15px;
`
const Button = styled.div`
padding: 10px 25px;
font-size: 12px;
background-color: blue;
color: white;
margin-top: 10px;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.02);
    cursor: pointer;
    background-color: gray;
}

`
const Input = styled.input`
width: 200px;
height: 30px;
margin: 5px;
`
const Wrapper = styled.div`
align-items: center;
padding: 20px 0;
display: flex;
width: 300px;
height: 100%auto;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius:5px;
flex-direction: column;
margin-bottom: 50px;
`

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color:lightgray;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
