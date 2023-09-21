import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faHeart} from '@fortawesome/free-regular-svg-icons';
import {faShare} from '@fortawesome/free-solid-svg-icons';
import {bookmarkLight} from '../assets/icons/index'
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'html-react-parser';

export default function RedooCard({src, title, content, date, postedBy, comments, likes}) {
  return (
     <Wrapper>
       <div className='publisher'>
        <div className='publisher-details'>
              <div className="avatar"></div>
              <a className="publisher-name"> {postedBy}-<span className='published-date'>{date}</span></a>
        </div>
        <button className='follow-btn'>follow</button>
      </div>
      <h1 className="post-title">{title}</h1>
      
      <div className='content'>{ReactHtmlParser(content)}</div> 
      <img className='bg-img' src={src} />
       <div className="post-card">
        <div className="comment-like">
            <span><FontAwesomeIcon icon={faHeart} />{likes}</span>
            <span><FontAwesomeIcon icon={faComment} />{comments}</span>
            <span  ><Link to="/"><img className='icon' src={bookmarkLight}></img> </Link></span>
        </div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  background-color: white;
  border-radius: 10px;
  padding: 10px;

.post-card{
  padding: 10px;
  /* min-width: 300px; */
}
.bg-img{
  object-fit: cover;
  max-height:600px;
  width: 100%;
  border-radius: 10px;
  margin-top:10px;

}

  a{
    font-weight: 600;
    width: 70%;
  }
  .icon{
    width: 30px;
    color: black;
  }

.datetime {
  font-size: 12px;
  color: rgb(168 179 207);
  color: white;
  margin: 3px 0;
}

.image-preview {
  flex: 1;
  min-height: 150px;
  width: 100%;
  border-radius: 10px;
  background-color: blueviolet;
  background-image: linear-gradient(to top left, blueviolet, #23a6d5);
  margin-bottom: 4px;
  padding: 10px;
}

.comment-like {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px 0;
  border-radius: 10px;
  margin-top: 10px;
}

.comment-like span {
  cursor: pointer;
  height: 40px;
  width: 50px;
  /* padding: 0 3px; */
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  font-weight: 900;
  border-radius: 10px;
  background-color: transparent;
  transition: all .15s ease;
}

.comment-like span:hover {
  background-color:#23a6d5;
  color: #FFFF;
}

.comment-like span svg {
  fill: rgb(255, 255, 255);
  margin-right: 2px;
}

.content{
 font-size: .8rem;
}
`