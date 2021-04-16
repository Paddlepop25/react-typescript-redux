import React from 'react'
import './App.css'
import Header from './components/Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Image = styled.img`
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

function App() {
  return (
    <>
      <Header />
      <a href='https://reactjs.org/' target='_blank'>
        <Wrapper>
          <Image
            src='https://bit.ly/37jVKoo'
            alt='nyona kueh asian cake dessert'
            width='500'
          />
        </Wrapper>
      </a>
    </>
  )
}

export default App
