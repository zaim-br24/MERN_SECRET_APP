import React,{useEffect, useState} from 'react'
import Wrapper from '../../assets/Styles/WatchSinglePageWrapper'
import {CommentsBox, VideoPlayer} from '../../components'
// import videoS from '../../assets/videos/truck.mp4'
import { useAppContext } from '../../context/appContext'
import { useParams } from 'react-router-dom';

export default function WatchSinglePage() {
  const { videoId } = useParams();
  const {getOneVideo, isLoading} = useAppContext()
  const [video, setVideo] = useState(null)

  useEffect(() => {
    const fetchData = async()=>{
     const result =  await  getOneVideo(videoId);
      setVideo(result)
    }
    fetchData()
  }, [videoId]);

  return (
    <Wrapper className='nasted-box'>
      <div className={`${isLoading? 'item1' : 'item1-loading'}`}>
      {video && (
      <VideoPlayer videoSrc={video && video.videoUrl && video.videoUrl[1]} />
        )}     
     </div>
      <div className='item2'>
         <CommentsBox/>
      </div>
      
      <div className='item3'>

      </div>

        
    </Wrapper>
  )
}

