import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Veronica Liu</h1>
    <p>University of Texas at Dallas 2020</p>
    <p> UNDER CONSTRUCTION- more content soon!</p>
    <Link to="/resume/">Resume</Link>
    <Link to="/animation/">Animation</Link>
    <Link to="/lighting/">Lighting </Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
