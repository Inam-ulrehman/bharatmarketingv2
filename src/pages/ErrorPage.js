import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import error from '../images/pageNotFound.svg'

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='img'>
        <img src={error} alt='' />
      </div>
      <div className='body'></div>
      <h3>Page not found</h3>
      <Link className='btn' to='/home'>
        Back home
      </Link>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  .img {
    img {
      max-width: 400px;
      max-height: 400px;
    }
  }
`
export default ErrorPage
