import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/Styles/CardWrapper';

export default function CardCompo() {
  return (
    <Link to="/postId">
        <Wrapper className='glass-background'>
        <div className="post_img">
            <img src="" alt="" />
        </div>
        <div className="content">
            <div className="post_details">
                <p > Posted by - 
                    <span className="user_name"> jack london34</span> - 
                    <span className="posted_date">7 hours ago</span>
                </p>
            </div>
            <p className="post_content_text">
                Architecture used to be artistic, but nowadays it's just about spending minimal budget to build a box, what do you think?
            </p>
        </div>
        </Wrapper>
    </Link>

  )
}

