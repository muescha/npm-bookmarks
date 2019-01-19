import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { Normalize } from 'styled-normalize'
import { GlobalStyle, Wrapper } from './layout.styled'
import Footer from './footer'

const theme = {
  mainColor: `#2196F3`,
  gatsbyColor: `#663399`,
  gatsbyColorAlt: `#9D7CBF`,
}

const Layout = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <Wrapper>
        {children}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
