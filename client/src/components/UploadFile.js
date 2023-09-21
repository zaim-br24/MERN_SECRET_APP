import React from 'react'
import {BsUpload} from 'react-icons/bs'
import Wrapper from '../assets/Styles/UploadFileWrapper'
// import FormRowFile from './FormRowFile'
import sizeFormater from '../utils/sizeFomater'

export default function UploadFile({handleVideoChange,handleDescription, videoFileName, videoFileSize, wordsCounter}) { 

  const uploadedVideoSize = sizeFormater(videoFileSize)

  const videoTextSize =( !videoFileName || !videoFileSize) ? null : `${videoFileName} (${uploadedVideoSize}MB)`

  return (
    <Wrapper >
      <label htmlFor="file" class="custum-file-upload">
          <div className="icon">
              <BsUpload className="icon" />
          </div>
          <div className="text">
              <span>{ videoTextSize || "Click to upload video (max 40MB)"}</span>
          </div>
            <input type="file" id="file" accept="video/*" onChange={(e)=>{handleVideoChange(e)}}></input>
        </label>

      <div className='video-description'>
          <textarea  rows="4" cols="50" placeholder='Description' onChange={(e)=> handleDescription(e)}/>
          <p className='words-counter'><span>{wordsCounter < 300 ? wordsCounter : "300"}</span>/300</p>
      </div>
   </Wrapper>

  )
}


