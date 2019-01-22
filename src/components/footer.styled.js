import styled from 'styled-components'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Credits = styled.footer`
  padding: 24px 0 40px;
  color: #666;
  font-size: 0.9em;
  font-style: italic;

  & > a {
    color: ${props => props.theme.mainColor};
    border-bottom: 1px solid transparent;
    text-decoration: none !important;
  }

  & > a.gatsby {
    color: ${props => props.theme.gatsbyColor};
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

const Icon = styled(FontAwesomeIcon)`
  margin-right: 2px;
`

export { Credits, GatsbyIcon, Icon }
