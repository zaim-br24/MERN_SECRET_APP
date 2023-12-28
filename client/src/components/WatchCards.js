import React, {useEffect} from 'react'
import WatchCard from './WatchCard'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import moment from 'moment/moment';
import Loader from './Loader'

export default function WatchCards() {
  const { getAllVideos, videos, isLoading, videosPage, setPage, numOfVideosPages, totalVideos} = useAppContext();
useEffect(()=>{
    getAllVideos()

}, [videosPage])

  return (
    <Wrapper >
      {isLoading && <Loader/>}
     {
        videos.map((video, index) => (
          
          <WatchCard
            key={index}
            videoId={video.name}
            postedBy={video.postedBy}
            publishedDate={moment(video.createdAt).format('MMM Do YY')}
            title={video.title}
            views={video.views}
            avatar={video.avatar}
            thumbnailUrl={video.video.thumbnailUrl}
          />
        ))     
        }   
    </Wrapper>
  )
}

const Wrapper = styled.div` 
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax( 300px, 1fr));
    grid-gap: 10px;
    margin: 0 auto;

    @media screen and (max-width: 992px){
      margin: auto 0;
    }
`