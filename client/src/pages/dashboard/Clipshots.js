import React, {useEffect} from 'react'
import styled from 'styled-components'
import {BiSolidDislike, BiSolidLike,BiSolidCommentDetail, BiSolidBookmark} from 'react-icons/bi'
import {PiShareFatFill} from 'react-icons/pi'

import {VideoContainer} from '../../components/index'
import videoS from '../../assets/videos/truck.mp4'

import { useAppContext } from "../../context/appContext";

export default function Clipshots() {
  const {hideReommendations} = useAppContext()
  
  useEffect(()=>{
    hideReommendations()
  },[])
  
  return (
    <Wrapper className='nasted-box'>
      <div className='list-dow'>
      <div className='clipshot'>
        <div className='clipshot-video'>
        <VideoContainer videoSrc={videoS}/>
        </div>
        <div className='clipshot-video-sideBar'>
          <div className='btn-container'><PiShareFatFill className='icon'/> <span>share</span></div>
          <div className='btn-container'><BiSolidBookmark className='icon'/><span>save</span></div>
          <div className='btn-container'><BiSolidCommentDetail className='icon'/><span></span></div>
        <div className='btn-container'><BiSolidDislike className='icon'/></div>
          <div className='btn-container'><BiSolidLike className='icon'/><span>2.4k</span></div>  

        </div>
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 0px;
  max-width: 450px;
  height: 500px;
  border-radius: 10px;
  @media screen and (max-width : 992px){
    margin-top: 0px;
  }
}

 .list-down{
  display: flex;
  flex-direction: column;

 }
  .clipshot{
    padding: 5px;
    margin: 10px 0;
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    .clipshot-video{
      border-radius: 10px;
      height: 90%;
      width: 100%;

      
      /* position: relative; */

    }
    .clipshot-video-sideBar{
      padding: 5px;
      border-radius: 10px;
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      /* background-color: orange; */
      .icon{
        width: 40px;
        height: 40px;
        color: rgba(0,0,0, .6);
        padding: 5px;
        border-radius: 10px;
        /* margin-bottom: 10px; */
        cursor: pointer;
        :hover{
          color:rgba(0,0,0, .8);
;

        }
      }
    
      .btn-container{
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
          color: rgba(0,0,0, .3);
          font-weight: 500;
        }
      }
      
    }
  `

