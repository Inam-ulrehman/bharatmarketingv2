import { useEffect } from 'react'
import { React, useState } from 'react'
import styled from 'styled-components'
import { homePageOne } from '../../utils/data'
import HomePageOneHolder from './HomePageOneHolder'

const HomePageOne = () => {
  const [values] = useState(homePageOne)
  const [index, setIndex] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      if (index >= values.length - 1) {
        return setIndex(0)
      }
      setIndex(index + 1)
    }, 2500)
  })
  return (
    <Wrapper className='container-img-text'>
      <div className='header'>
        <h2>
          Bharat &#38;<span> Marketing</span>
        </h2>
        <div className='title-underline header-underline'></div>
      </div>
      {/* WHOLE PAGE ONE HOLDER CONTAINER */}
      <div className='pageOne-container'>
        {/* Mobile version handle */}
        <div>
          <div className='image-container'>
            <img className='image' src={values[index].path} alt='' />
          </div>
          {/* Home page holder buttons */}
          <div className='buttons'>
            {values.map((item) => {
              return <HomePageOneHolder key={item.id} {...item} index={index} />
            })}
          </div>
        </div>

        {/* Desktop version first page */}
        <div className='description-container'>
          <h4 className='description-heading'>{values[index].title}</h4>
          <p className='description-paragraph'>{values[index].description}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .header-underline {
    margin-bottom: 1rem;
  }
  .header {
    text-align: center;
    span {
      color: var(--primary-5);
    }
  }

  .image-container {
    max-height: 300px;
    max-width: 678px;
    margin: 0 auto;
    border: 5px double var(--primary-5);
    overflow: hidden;

    .image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      display: block;
      border-radius: var(--radius);
    }
  }
  .buttons {
    margin-top: 20px;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  .changeBackGround {
    background-color: var(--primary-8);
  }
  .pageOne-container {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
  .description-container {
    text-align: center;
    background-color: var(--white);
    box-shadow: var(--shadow-2);
    border-radius: var(--radius);
    transition: var(--transition);
    padding: 1rem;
  }
  .description-heading {
    color: var(--primary-8);
  }
  .description-paragraph {
    color: var(--grey-5);
  }
`
export default HomePageOne
