import React from 'react'
import styled from 'styled-components'
import clientImage from '../images/Removebackground.png'
import { Link } from 'react-router-dom'
import { questionAnswers } from '../utils/data'
import Qustionsholder from '../components/Qustionsholder'
import Footer from '../components/Footer'

const About = () => {
  return (
    <Wrapper>
      <div className='header'>
        <h3 className='title'>
          About <span style={{ color: 'var(--primary-5)' }}>Us</span>
        </h3>
        <div className='title-underline'></div>
      </div>
      <div className='main'>
        <div className='box-1'>
          <div className='img'>
            <img src={clientImage} alt='' />
          </div>
          <div className='body'>
            <h4 className='title'>Mr &#38; Mrs Bharat </h4>
            <div className='title-underline'></div>
            <p className='about'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              magni ipsam itaque quis quasi tenetur iure aperiam recusandae
              commodi praesentium officiis harum doloremque nobis laborum,
              deleniti inventore dolores dignissimos culpa odit ullam sunt
              impedit facere at! Quis debitis itaque incidunt rem quasi
              consequatur nesciunt facere, obcaecati iusto. Ipsa, earum
              expedita.
            </p>
            <Link to='/contact' className='btn'>
              Reach us
            </Link>
          </div>
        </div>
      </div>
      <div className='questions'>
        <h3 className='title'>Freq Asked Questions</h3>
        {questionAnswers.map((item) => {
          return <Qustionsholder key={item.id} {...item} />
        })}
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
  .img {
    max-width: 400px;
    max-height: 400px;
    margin: 2rem auto;
    img {
      border-radius: var(--radius);
      max-width: 400px;
      max-height: 400px;
      box-shadow: var(--shadow-2);
    }
  }
  .body {
    text-align: center;
    p {
      margin: 1rem auto;
    }
  }
  .about {
    background-color: var(--white);
    padding: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-2);
  }
`
export default About
