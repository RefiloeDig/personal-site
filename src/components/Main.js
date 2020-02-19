import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className='close'
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id='main'
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id='intro'
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='text-sm text-bluegrey-100 tracking-tight uppercase'>
            Intro
          </h2>
          <span className='image main'>
            <img src={pic01} alt='' />
          </span>
          <h3 className='-pt-5 text-2xl tracking-tight normal-case'>
            My name is Refiloe. I consider myself to be a generalist and
            all-round nice guy (who is a bit weird at times). I am a researcher
            at heart, currently doing my MA in Positive Psychology as I believe
            the world needs to more happy people. Besides this, I am passionate
            about digital design and psychology.
          </h3>
          <h3 className='-pt-5 text-2xl tracking-tight normal-case'>
            I will be using this website to display all my
             achievements from all my passions. 
          </h3>
          {close}
        </article>

        <article
          id='work'
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='text-sm text-bluegrey-100 tracking-tight uppercase'>
            Work
          </h2>
          <span className='work-image'>
            <img src={pic04} alt='' />
          </span>
          <h3 className='-pt-5 text-2xl tracking-tight normal-case'>
            This page is a showcase of all my personal work including blog
            posts, DJ mixes, and anything else I feel I need to share with the
            world.
          </h3>
          {close}
        </article>
        <article
          id='contact'
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className='text-sm text-bluegrey-100 tracking-tight uppercase'>
            Contact
          </h1>
          <h2 className='-pt-5 text-2xl tracking-tight normal-case'>
            I would love to hear more from you. HMU on the below links:{' '}
          </h2>
          <ul className='icons'>
          <li>
              <a href='https://twitter.com/digoamaye'
                 target='_blank'
                 rel='noopener noreferrer' className='icon fa-twitter'>
                <span className='label'>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/refiloe-digoamaye/'
                target='_blank'
                rel='noopener noreferrer'
                className='icon fa-linkedin my-6'
              ></a>
            </li>
            <li>
              <a
          href='mailto:refiloe.digoamaye@gmail.com?Subject=Hey!'
          target='_top'
          rel='noopener noreferrer'
          className='icon fa-envelope'>
                <span className='label'>Email</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}


export default Main
