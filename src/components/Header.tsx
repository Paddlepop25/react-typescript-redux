import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { regalBlue, offWhite } from '../styles/styledTheme'

const HeaderStyle = styled.header`
  background: #333;
  color: ${regalBlue};
  text-align: center;
  padding: 10px;
`

const linkStyle = {
  color: `${offWhite}`,
  padding: '7px',
  textDecoration: 'none',
}

const Header: React.FC = () => {
  return (
    <>
      <HeaderStyle>
        <h2>Hello there! 👩‍💻👨‍💻 </h2>
        <Link to='/' style={linkStyle}>
          Home
        </Link>
        |
        <Link to='/icecreams' style={linkStyle}>
          IceCreams
        </Link>
        |
        <Link to='/cakes' style={linkStyle}>
          Cakes
        </Link>
        |
        <Link to='/users' style={linkStyle}>
          Users
        </Link>
        |
        <Link to='/festivals' style={linkStyle}>
          Festivals
        </Link>
        |
        <Link to='/bugs' style={linkStyle}>
          Bugs
        </Link>
        |
        <Link to='/pokemon' style={linkStyle}>
          Pokemon
        </Link>
        |
        <Link to='/weather' style={linkStyle}>
          Weather
        </Link>
      </HeaderStyle>
    </>
  )
}

export default Header
