import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/images/not-found.svg'

export default function Error() {

  return (
    <Wrapper>
        <div>
            <img src={img} alt="" />
            <h3>Ohh!! Page not found.</h3>
            <p>we can't seem to find the page your looking for</p>
            <Link to="/landing">Back home</Link>
       </div>
    </Wrapper>
  )
}



const Wrapper = styled.main`
  text-align: center;
  min-height: 100vh;
  background-color: rgba(17, 24, 39, 1);
  color: white;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: blueviolet;
    text-decoration: underline;
    text-transform: capitalize;
    :hover{
      color: var(--primary-500);
    }
    
  }
`


