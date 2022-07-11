import React from 'react'
import { navbarData } from '../../utils/data'
import logo from '../../images/logo.png'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import DesktopNavbarComponent from './DesktopNavbarComponent'
import DesktopNavbarWrapper from '../../wrappers/DesktopNavbarWrapper'
import { Link } from 'react-router-dom'

const DesktopNavbar = () => {
  return (
    <DesktopNavbarWrapper>
      <div className='nav-container'>
        <div className='logo-container'>
          <Link to='/home'>
            <img className='logo' src={logo} alt='' />
          </Link>
        </div>

        <div className='navbar'>
          <ul>
            {navbarData.map((item) => {
              return <DesktopNavbarComponent key={item.id} {...item} />
            })}
          </ul>
        </div>
        <div className='social-icons'>
          <ul>
            <li>
              <a
                href='https://facebook.com/angra.laddy'
                target='_blank'
                rel='noreferrer'
              >
                <img className='icon' src={facebook} alt='' />
              </a>
            </li>
            <li>
              <a
                href='https://instagram.com/angra1971/'
                target='_blank'
                rel='noreferrer'
              >
                <img className='icon' src={instagram} alt='' />
              </a>
            </li>
            <li>
              <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
                <img className='icon' src={linkedin} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </DesktopNavbarWrapper>
  )
}

export default DesktopNavbar
