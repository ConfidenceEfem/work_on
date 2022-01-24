import React from 'react'
import styled from "styled-components"
import {AiOutlineLike,AiFillLike} from "react-icons/ai"

const LikeCoomp = ({like,likeicon,commenticon}) => {
  return (
    <div>
    {
        like? 
        <LikeClickHolder fs="20px">
        <AiOutlineLike/>
        <span>Like</span>
    </LikeClickHolder>:null
    }

    {likeicon?<Onw>
        <Like/>
            <LikerName>You</LikerName>
       </Onw>:null}

       {commenticon?  <CommentsNumber>
        No comments
    </CommentsNumber>:null}
         </div>
  )
}

export default LikeCoomp

const InputHolder = styled.form`
width: 90%;
background-color: #eee;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 5px;
`
const LikeClickHolder = styled.div`
display: flex;
align-items: center;
transform: scale(1);
transition: all 350ms;
font-size: ${({fs})=>fs};
color: ${({bg})=>bg};
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
span{
    font-size: 12px;
    margin-left: 5px;
}
`

const CommentsNumber = styled.div`
font-size: 12px;
color: gray;
`
const LikerName = styled.div`
font-size: 12px;
color: gray;
`
const Like = styled(AiFillLike)`
color: blue;
font-size: 13px;
margin-right: 5px;
`
const Onw = styled.div`
display: flex;
align-items: center;
`
