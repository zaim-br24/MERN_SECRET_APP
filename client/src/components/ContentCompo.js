import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {RedooCards, ClipShotsCards, WatchCards} from './index'

export default function ContentCompo() {
  return (
    <Wrapper className='content-compo'>
        {/* <CardsCompo/> */}
        {/* <div className='category-title'> <Link to='/redoos'><p>Top Recent Reedos.</p></Link></div>
        <RedooCards/> */}
        <div className='category-title'> <Link to='/watch'><p>Top Recent Videos.</p></Link></div>
        <WatchCards/>
        
        <div className='category-title'> <Link to='/clipShots'><p>Top Recent ClipShots.</p></Link></div>
        <ClipShotsCards/>

        

    </Wrapper>
  )
}


const Wrapper = styled.div` 
    /* max-width: 1400px; */
    /* margin-top: 30px; */
    .category-title{
      margin: 30px 0;
      width: 300px;
      p{
      font-size: 1.5rem;
      color: rgba(0, 0, 0, .8.2);
      font-weight: 600;
      transition: all .30s ease-in;

      :hover {
        text-decoration: underline blueviolet;
        background: linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
      }
    }
    }
   
`;
