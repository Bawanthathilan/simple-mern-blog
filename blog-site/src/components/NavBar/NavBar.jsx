import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { RiArticleFill } from 'react-icons/ri'
import { SiAboutDotMe } from 'react-icons/si'

function NavBar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Pro.Blog</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <Link to='/'>
              {' '}
              <AiFillHome className='navbarIco' />
            </Link>
          </div>
          <div className='topbarIconContainer'>
            <Link to='/articles-list'>
              <RiArticleFill className='navbarIco' />
            </Link>
          </div>
          <div className='topbarIconContainer'>
            <Link to='/about'>
              <SiAboutDotMe className='navbarIco' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
