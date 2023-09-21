import React from 'react'
import { NavLink } from 'react-router-dom'
import links from '../utils/links'

export default function NavLinks({toggleOverly, insertText}) {
  
  return (
    <div className='nav-links'>
    {links.map((link) => {
      const { text, path, id, icon, overly, showRecommendation } = link

      return (
        <NavLink
          to={path}
          
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          key={id}
         onClick={overly && toggleOverly} >
          <span className='icon'>{icon}</span>
          {insertText && <p className='text'>{text}</p> }
        </NavLink>
      )
    })}     
</div>
  )
}
