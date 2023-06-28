import React from 'react'

const Form = () => {
  return (
    <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter your name'
        data-testid = "name-input" id="name" />
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form