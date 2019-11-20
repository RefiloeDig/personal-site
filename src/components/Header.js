import React from 'react'
import PropTypes from 'prop-types'
import pic04 from '../assets/images/logos.svg'

const Header = props => (
  <header id='header' style={props.timeout ? { display: 'none' } : {}}>
    <div className='logo'>
      <span img src={pic04} alt=''></span>
    </div>
    <div className='content'>
      <div className='inner'>
        <h1>Refiloe Digoamaye</h1>
        <h2 className='-pt-5 text-2xl tracking-tight normal-case'>
          Keeping it simple since 1992.
        </h2>
        <h2 className='-pt-5 text-2xl tracking-tight normal-case'>
          Click the <span className='text-orange-400'> buttons </span> below to
          learn more about my interests. Go.
        </h2>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href='javascript:;'
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href='javascript:;'
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href='javascript:;'
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
