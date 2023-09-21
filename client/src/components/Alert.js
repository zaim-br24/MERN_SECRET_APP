import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

export default function Alert() {
  const {alertText, alertType} = useAppContext()
  return (
    <Wrapper className={`alert-${alertType}`}> 
       { `${alertText}`}
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
    font-weight: 500;
    border-radius: 10px;
    margin: 10px auto;
`
