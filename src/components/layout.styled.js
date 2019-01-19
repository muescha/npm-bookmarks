import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 0;
`

export { GlobalStyle, Wrapper }
