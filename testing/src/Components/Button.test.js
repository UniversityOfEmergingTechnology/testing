import {render , screen} from '@testing-library/react'
import Button from './Button'
describe('Button' , () => {
    it('displays the correct text' , () => {
        render(<Button/>)
        const textElement = screen.getByText('Click me')
        expect(textElement).toBeInTheDocument()
    })
})