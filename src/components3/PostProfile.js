import React from 'react'
import styled from "styled-components"
import {AiTwotoneDelete,AiFillLike} from "react-icons/ai"
import img from "./profile.jpg"

const PostProfile = () => {
  return (

    <PicNameTimeAndDelete>
    <PicNameTime>
    <FirstProfile src={img}/>
    <NameTime>
        <PosterName>Confidence Efem</PosterName>
        <PosterDate>2mins</PosterDate>
    </NameTime>
</PicNameTime>
<DeleteIcon/>
    </PicNameTimeAndDelete>
 
  )
}

export default PostProfile


const PosterDate = styled.div`
font-size: 10px;
margin-top: 1px;
`
const PosterName = styled.div`
font-weight: bold;
font-size: 12px;
font-family: Arial, Helvetica, sans-serif;
`
const NameTime = styled.div``


const FirstProfile = styled.img`
width: 40px;
height: 40px;
object-fit: cover;
margin-right: 20px;
border-radius: 50%;
`
const PicNameTime = styled.div`
display: flex;
align-items: center;
`

const DeleteIcon = styled(AiTwotoneDelete)`
font-size: 13px;
cursor:pointer;
`
const PicNameTimeAndDelete = styled.div`
justify-content: space-between;
display: flex;
width: 90%;
align-items: center;
margin-top: 15px;
margin-bottom: 20px;
`
