import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Qustionsholder = ({ id, question, answer }) => {
  const [value, setValue] = useState(true)

  const handleClick = (e) => {
    console.log(e.target)
    setValue(!value)
  }

  return (
    <Wrapper>
      <div className='question-holder'>
        <h5>{question}</h5>
        <div className='button-box'>
          {value ? (
            <FaPlus onClick={handleClick} />
          ) : (
            <FaMinus onClick={handleClick} />
          )}
        </div>
      </div>
      <p className={value ? `hide ` : null}>{answer}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .question-holder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    margin: 0rem auto;
    max-width: var(--fixed-width);
    margin-top: 1rem;
    h5 {
      color: var(--primary-5);
    }
    svg {
      color: var(--primary-5);
      margin-right: 1rem;
      cursor: pointer;
    }
  }
  .hide {
    display: none;
  }
  p {
    margin: 0 auto;
    max-width: var(--fixed-width);
    background-color: var(--white);
    padding: 1rem;
    color: var(--grey-5);
  }
`

export default Qustionsholder
