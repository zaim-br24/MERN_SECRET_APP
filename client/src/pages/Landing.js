import React from 'react'
import { Link } from 'react-router-dom'
import {landingPageBg} from '../assets/images/index'
import { LogoCompo, ButtonCompo } from '../components/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Wrapper   from '../assets/Styles/LandingPageWrapper'
// import styled from 'styled-components'
export default function Landing() {
  return (

    <Wrapper imgUrl={landingPageBg} >
     
      <header className="landing_nav">
          <LogoCompo  />
          <ButtonCompo type='Click' text='Register' link='/register' className="landing-btn"/>
      </header>
      <div className="main_container">
        <div className='content'>
          <h3 className='slang_header'> Welcome to <span className='backdoor'>BACKDOOR</span>, the global hub where individuals from every corner of the world come together <span className='anonymusly'>anonymously</span>  and <span className='publicly'>publicly</span>. </h3>
            <div className="bottom_contaier">

              <div className='connect_publicly'> 
              <Link to="/register">             
               BACKDOOR creates a space for meaningful conversations, shared experiences, and exploration.
               </Link>
               <Link to="/register"> <button className='arrow-btn'><FontAwesomeIcon className='icon' icon={faArrowRight} /></button></Link>

              </div>

              <div className='join'> 
              <Link to="/register"> Join us today and unlock the power of global connection at BACKDOOR.</Link>
                 <Link to="/register"> <button className='arrow-btn'><FontAwesomeIcon className='icon' icon={faArrowRight} /></button></Link>
              </div>

              <div className='connect_anonymously'>
               <Link to="/register">Connect anonymously and discover a world united through anonymity, where every voice matters.</Link>
               <Link to="/register"> <button className='arrow-btn'><FontAwesomeIcon className='icon' icon={faArrowRight} /></button></Link>

              </div>

            </div>
        </div>
      </div> 

    </Wrapper>
  )
}

