import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function WatchCard({videoId,thumbnailUrl, title, publishedDate, views, avatar, postedBy}) {
  return (
    <Wrapper class="card">
      <Link to={`/watchs/${videoId}`}>
        <div class="image">
          <img src={thumbnailUrl} alt={title}/>
        </div>
        <div class="content">
            <a href="#">
            <span class="title">
              {title}
            </span>
            </a>
        <div className='publisher'>
            <div class="avatar">
              {avatar && <img src={avatar} alt='avatar' />}
            </div>
            <a class="publisher-name">{postedBy} <span className='published-date'>{publishedDate} - </span> <span className='views'>{views} views</span> </a>
        </div>
        </div>
    </Link>

        </Wrapper>

    )
}

const Wrapper = styled.div`
  /* max-width: 250px; */
  border-radius: 10px;
  cursor: pointer;

.image {
  width: 100%;
  height: 240px;
  background-color: white;
  border-radius: 10px;
  img{
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
}
.content {
  padding: 5px;
  
.title {
  color: #000;
  font-size: .8rem;
  line-height: 1rem;
  font-weight: 500;
}

.publisher{
    display: flex;
    align-items: center;
    position: relative;

    .avatar {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: blueviolet;
    background-image: linear-gradient(to top left, blueviolet, #23a6d5);
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }
    }
    .publisher-name{
        font-size: .8rem;
        font-weight: 700;
        margin-left: 10px;
        color: rgb(88, 87, 70);
        text-transform: capitalize;
    }
    .views{
      font-size: .7rem;
    }
    .published-date{
        font-size:.7rem;
        color: rgb(88, 87, 87);
    }
}

}

`;