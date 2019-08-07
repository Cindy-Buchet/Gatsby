/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div>
        <main>{children}</main>
        <footer>
          <section id="footer">
          <ul class="icons">
              <li><a href="#" className="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" className="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
              <li><a href="#" className="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="#" className="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
              <li><a href="#" className="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
          </ul>
              <ul className="copyright">
                  <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li><li>Demo Images: <a href="http://unsplash.com">Unsplash</a></li>
              </ul>
          </section>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
