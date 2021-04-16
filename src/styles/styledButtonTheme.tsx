import styled from 'styled-components'

import { regalBlue } from './styledTheme'

const ButtonStyle = styled.button`
  background-color: ${regalBlue};
  padding: 0.25em 0.5em;
  transition: background-color 0.7s, color 0.25s;

  &:hover {
    border: 2px solid yellow;
    background-color: #ff22f1;
    color: #ffffff;
    cursor: pointer;
  }
`
export default ButtonStyle
