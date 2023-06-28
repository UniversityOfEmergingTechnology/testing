import React , {useState} from 'react'

const ContactForm = () => {
    const [name , setName] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        // handle form submission
    }
  return (
    <form onSubmit={handleSubmit}>
        <label> Name:
            <input type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
             />
        </label>
        <button type='Submit'>Submit</button>
    </form>
  )
}

export default ContactForm