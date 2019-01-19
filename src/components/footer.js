import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Credits, GatsbyIcon } from './footer.styled'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fixed(width: 16, height: 16) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Credits>
        &copy; {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GatsbyIcon fixed={data.file.childImageSharp.fixed} />
          Gatsby
        </a>
      </Credits>
    )}
  />
)

export default Footer
