import React from 'react'
import Wrapper from '../assets/Styles/CommentsBoxWrapper'

export default function CommentsBox() {
  return (
    <Wrapper>
      {/* Comments */}
      <div className='comments-container'>
        <div className='comment'>
        <div className='publisher'>
            <div className="avatar"></div>
            <a className="publisher-name">Zaim br -<span className='published-date'> 4 min ago</span> <button className='reply-btn'>reply</button></a>
        </div>
        </div>
     
      </div>
         
    </Wrapper>
  )
}
