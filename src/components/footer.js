import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { faFontAwesomeFlag, faGithub } from '@fortawesome/free-brands-svg-icons'

import { Credits, GatsbyIcon, Icon } from './footer.styled'

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
        Project by{' '}
        <a
          href="https://github.com/cardiv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faGithub} />
          cardiv
        </a>{' '}
        | Built with
        {` `}
        <a
          className="gatsby"
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GatsbyIcon fixed={data.file.childImageSharp.fixed} />
          Gatsby
        </a>{' '}
        |{` `}
        Icons by{' '}
        <a
          href="https://fontawesome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faFontAwesomeFlag} />
          FontAwesome
        </a>
      </Credits>
    )}
  />
)

export default Footer
