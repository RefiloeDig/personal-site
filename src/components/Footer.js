import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id='footer' style={props.timeout ? { display: 'none' } : {}}>
    <ul className='icons'>
      <li>
        <a
          href='https://twitter.com/digoamaye'
          target='_blank'
          rel='noopener noreferrer'
          className='icon fa-twitter'
        >
          <span className='label'>Twitter</span>
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/refiloe-digoamaye/'
          target='_blank'
          rel='noopener noreferrer'
          className='icon fa-linkedin'
        >
          <span className='label'>LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href='https://github.com/RefiloeDig'
          target='_blank'
          rel='noopener noreferrer'
          className='icon fa-github'
        >
          <span className='label'>GitHub</span>
        </a>
      </li>
      <li>
        <a
          href='mailto:refiloe.digoamaye@gmail.com?Subject=Hey!'
          target='_top'
          rel='noopener noreferrer'
          className='icon fa-envelope'
        >
          <span className='label'>Email</span>
        </a>
      </li>
      <li>
        <a
          href='https://soundcloud.com/weirdblackguy'
          target='_blank'
          rel='noopener noreferrer'
          className='icon fa-soundcloud'
        >
          <span className='label'>SoundCloud</span>
        </a>
      </li>
    </ul>
    <p className='copyright'> Made with ✌🏿.</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
