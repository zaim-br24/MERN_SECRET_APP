import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function LogoCompo() {
  return (
    <Logo>
        {/* Aicha Hassi */}
        <Link to='/'><p>Backdoor</p></Link>
        
        
    </Logo>
  )
}


const Logo = styled.div`
     /* color: var(--heading-color) ; */
    p{
     background: linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab);
     background-clip: text;
    -webkit-background-clip: text;
     color: transparent;
     font-size:1.5rem ;
     font-weight:800 ;
     margin-left: 20px
    }
  
`;