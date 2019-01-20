import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 16px;
  border: 1px solid #eee;
  border-bottom-color: ${props => props.theme.mainColor};
  color: #333;
  background: #fcfcfc;
  border-radius: 0;
`

export { Input }
