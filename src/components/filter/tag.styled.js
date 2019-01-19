import styled from 'styled-components'

const TagItem = styled.li`
  list-style: none;
`

const Button = styled.button`
  color: ${props => (props.active ? `#fff` : `#666`)};
  background: ${props =>
    props.active ? `${props.theme.mainColor} !important` : `transparent`};
  border: 0;
  padding: 8px 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #f8f8f8;
  }
`

export { TagItem, Button }
