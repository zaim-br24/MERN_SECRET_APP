import React from 'react'
import styled from 'styled-components'
import {CardCompo} from './index'

export default function CardsCompo() {
  return (
    <Cards>
      <CardCompo/>
      <CardCompo/>
      <CardCompo/>
      <CardCompo/>
      <CardCompo/>
      <CardCompo/>
      <CardCompo/>
    </Cards>
  )
}

const Cards = styled.div`
 @media screen and (max-width: 820px){
        display: grid;
      }
`;