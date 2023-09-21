import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function ButtonCompo({type ,text, link}) {
  return (
    <Wrapper>
        <Link to={link}>
          <button className='btn-style' type={type}>{text}</button>
        </Link>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    background-color: aliceblue;
    padding: 2px;
    border-radius: 20px;
    background-image: linear-gradient(to right, #e73c7e,#23d5ab);
  

    button{
      border-radius: 20px;
      font-weight: 500;
        :focus,
        :hover {
        background-color:white;
        color: black;
    
        }
    }
`;