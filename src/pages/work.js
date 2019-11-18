import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import Layout from '../components/layout'

import iconwrite from '../assets/images/SVG/icon-writing.svg'

const Work = () => (
  <Layout>
    <h1>Welcome to my work</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Work
