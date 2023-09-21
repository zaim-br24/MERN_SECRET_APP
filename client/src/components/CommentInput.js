import React from 'react'
import Wrapper from '../assets/Styles/CommentInputWrapper'
export default function CommentInput({handleSubmit, handelClick, value}) {
  return (
    <Wrapper className='comment-input'>
        {/* <div className='avatar'></div> */}
        <form>
           <input type='text' value={value}  placeholder='add a comment'></input>
           {/* <button type='click' onClick={handelClick}>cancel</button> */}
           <button className='comment-btn' type='submit' onSubmit={handleSubmit}>Comment</button>
        </form>
    </Wrapper>
  )
}
