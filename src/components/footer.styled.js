import styled from 'styled-components'
import Img from 'gatsby-image'

const Credits = styled.footer`
  padding: 24px 0 40px;
  color: #666;
  font-size: 0.9em;
  font-style: italic;

  & > a {
    color: ${props => props.theme.gatsbyColor};
    border-bottom: 1px solid transparent;
    text-decoration: none !important;
  }

  & > a:hover,
  & > a:focus {
    opacity: 0.8;
  }
`

const GatsbyIcon = styled(Img)`
  position: relative !important;
  top: 2px;
  margin: 0 1px;
`

export { Credits, GatsbyIcon }
