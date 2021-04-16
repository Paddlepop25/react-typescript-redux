import React from 'react'
import { Box } from '../styles/styledTheme'
import Cake from './Cake'
import CakeChoose from './CakeChoose'
import Header from './Header'

const CakeBoth: React.FC = () => {
  return (
    <>
      <Header />
      <Box>
        <Cake />
        <CakeChoose />
      </Box>
    </>
  )
}

export default CakeBoth
