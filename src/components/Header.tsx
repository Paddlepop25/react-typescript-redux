import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <h2>Hello there! 👩‍💻👨‍💻 </h2>
      <Link to='/'>🏡 Home</Link> | <Link to='/cakes'>🎂 Cakes</Link> |
      <Link to='/icecreams'>🍦 IceCreams</Link> |
      <Link to='/users'> 👨‍👩‍👧‍👦 Users</Link> |{' '}
      <Link to='/festivals'> 🎅 Festivals</Link>
      <br />
    </>
  )
}

export default Header
