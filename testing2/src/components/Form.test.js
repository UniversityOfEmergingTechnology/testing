import {render , screen} from '@testing-library/react'
import Form from './Form'

describe('Form' , () => {

    it('finds element by text', () => {
        render(<Form/>)
        expect(screen.getByText('Submit')).toBeInTheDocument()
    })
    it('finds element by label text' , () => {
        render(<Form/>)
        expect(screen.getByLabelText('Name')).toBeInTheDocument()
    })
    it('finds element by placeholder text' , () => {
        render(<Form/>)
        expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    })
    it('finds element by test id' , () => {
        render(<Form/>)
        expect(screen.getByTestId('name-input')).toBeInTheDocument()
    })
})