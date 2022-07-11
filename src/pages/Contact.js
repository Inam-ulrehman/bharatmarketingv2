import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(e.target)
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='title'> Bharat Marketing </h3>
        <div className='title-underline'></div>
        <div>
          {/* name input */}
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input type='text' className='form-input' />
          {/* email input */}
          <label className='form-label' htmlFor='name'>
            Email
            <input type='email' className='form-input' />
          </label>
          {/* Mobile input */}
          <label className='form-label' htmlFor='name'>
            Mobile
          </label>
          <input type='text' className='form-input' />
          {/* textArea input */}
          <label className='form-label' htmlFor='name'>
            Inquiry
          </label>
          <textarea
            className='form-textarea'
            name='Text1'
            cols='60'
            rows='5'
          ></textarea>
        </div>
        <button className='btn btn-block' type='submit'>
          Submit your request
        </button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`
export default Contact
