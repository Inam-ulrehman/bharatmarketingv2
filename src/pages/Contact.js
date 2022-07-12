import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import Footer from '../components/Footer'

const initialState = {
  name: '',
  email: '',
  mobile: '',
  inquiry: '',
}
const Contact = () => {
  const [state, setState] = useState(initialState)
  // handleSubmit
  const handleSubmit = (e) => {
    const { name, email, mobile, inquiry } = state
    e.preventDefault(e)

    if (!name || !email || !mobile || !inquiry) {
      return toast.warning('Please fill in all the fields ')
    } else {
      return toast.success('Request successfully submitted.')
    }
  }

  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
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
          <input
            type='text'
            className='form-input'
            name='name'
            id='name'
            value={state.name}
            onChange={handleChange}
          />
          {/* email input */}
          <label className='form-label' htmlFor='email'>
            Email
            <input
              type='email'
              className='form-input'
              name='email'
              id='email'
              value={state.email}
              onChange={handleChange}
            />
          </label>
          {/* Mobile input */}
          <label className='form-label' htmlFor='mobile'>
            Mobile
          </label>
          <input
            type='text'
            className='form-input'
            name='mobile'
            id='mobile'
            value={state.mobile}
            onChange={handleChange}
          />
          {/* textArea input */}
          <label className='form-label' htmlFor='inquiry'>
            Inquiry
          </label>
          <textarea
            className='form-textarea'
            cols='60'
            rows='5'
            name='inquiry'
            id='inquiry'
            value={state.inquiry}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className='btn btn-block' type='submit'>
          Submit your request
        </button>
      </form>
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`
export default Contact
