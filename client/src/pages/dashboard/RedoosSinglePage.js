import React from 'react'
import Wrapper from '../../assets/Styles/RedoosSinglePageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faHeart, faBookmark} from '@fortawesome/free-regular-svg-icons';
import { CommentInput } from '../../components/index';

export default function RedoosSinglePage() {
  return (
    <Wrapper className='container-margin'>
      <div className='content'>
        <div className='redoo-post-conatainer'>
            <div className='publisher'>
                <div className='publisher-details'>
                  <div className="avatar"></div>
                    <a className="publisher-name">Zaim br <p className='published-date'> posted- <span>4 min ago</span></p> </a>
                 </div>
                <button className='follow-btn'>follow</button>
            </div>


            <div className='post-content'>
              <h3 className='content-title'>7 Tools for Faster Development in React and the MERN stack</h3>
              <div className='categories'>
                <p>#Reactjs</p>
                <p>#nodejs</p>
                <p>#webdev</p>
                <p>#MERN</p>
              </div>

              <div className='img-container'>
               <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--ZIuAKcmv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/asfdyolxguf4zgvqszzi.png' alt="image"/>

               <div className='text-content'>
              </div>
            </div>
            </div>

            <div className='post-reactions'>
              <div><FontAwesomeIcon icon={faHeart} /> 12</div>
              <div><FontAwesomeIcon icon={faComment} /> 5</div>
              <div><FontAwesomeIcon icon={faBookmark} /></div>
            </div>

            <CommentInput/>
        </div> 

        
        </div>
        <div className='right-side'>
        publisher side
        </div>
    </Wrapper>
  )
}

