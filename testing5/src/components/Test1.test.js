import {render , screen , fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm'

describe('Form testing' ,() => {
    test('name input updates on change' , () => {
        render(<ContactForm></ContactForm>)
        const nameInput = screen.getByLabelText('Name:')
        fireEvent.change(nameInput,{
            target : {
                value : "John"
            }
        })
        expect(nameInput.value).toBe('John')
    })
    test('handling form submission' , () => {
        const handleSubmit = jest.fn();
        const preventDefault = jest.fn();
        render(<ContactForm/>)
        const nameInput = screen.getByLabelText('Name:')
        const submitButton = screen.getByText('Submit')
        fireEvent.change(nameInput,{
            target : {
                value : "John"
            }
        })
        fireEvent.click(submitButton , {preventDefault})
        expect(preventDefault).toBeCalled()
        
      


    })
})