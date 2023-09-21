import React ,{useEffect} from 'react'
import { WatchCards } from '../../components'
import styled from 'styled-components'
import { useAppContext } from "../../context/appContext";

export default function Watch() {
  const  {displayReommendations} = useAppContext()

  useEffect(()=>{
    displayReommendations()
  })
  return (
    <Wrapper className='nasted-box'>
        <WatchCards/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
margin-top: 65px;
@media screen and (max-width:992px) {
  margin: 0;
  margin-top: 90px;
}

`