import React,{useEffect} from 'react'
import { RedooCards } from '../../components'
import styled from 'styled-components'
import { useAppContext } from "../../context/appContext";

export default function Redoos() {
  const  {displayReommendations} = useAppContext()
  useEffect(()=>{
    displayReommendations()
  },[])
  
  return (
    <Wrapper className='nasted-box'>
      <RedooCards/>
    </Wrapper>
      
  )
}


const Wrapper = styled.div`
     margin-top: 40px;
     @media screen and (max-width : 992px){
        margin-top: 70px;
     }
`
