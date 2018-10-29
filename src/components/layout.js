import React from 'react'
import {Link} from "gatsby"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const ListLink = props =>(
  <li style={{display:'inline-block', marginRight: '1rem'}}>
  <Link to={props.to}>{props.children}</Link>
  </li>
)
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

     
    
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} /> 
        <div
          style={{
            margin: '0 auto',
            maxWidth: 650,
            padding: '0px 1.00rem 1.00rem',
            paddingTop: 0,
          }}
          
        >  
            <header style={{ marginBottom: `1.5rem` }}>
      <ul style={{ listStyle: `none`, marginLeft:"3 px" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/animation/">Animation</ListLink>
        <ListLink to="/lighting/">Lighting</ListLink>
        <ListLink to="/resume/">Resume</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

          {children}
        </div> 
        <Footer siteTitle={data.site.siteMetadata.title} />
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
