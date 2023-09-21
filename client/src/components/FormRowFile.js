
import React from 'react'
import {SlPicture} from 'react-icons/sl'

export default function FormRowFile({text, fileDesc, handleChange}) {
  return (
    <div class="custum-file-upload" for="file">
        <SlPicture class="icon"/>
        <div class="text">
        <span>{typeof fileDesc === 'string' ? fileDesc : text}</span>

        </div>

        <input type="file" id="file" onChange={(e)=>{handleChange(e)}}></input>
   </div>
  )
}
