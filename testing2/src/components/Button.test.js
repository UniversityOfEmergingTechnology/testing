import {fireEvent , render , screen} from '@testing-library/react'
import Button from './Button'

describe('Button' , () => {
    it('increments count when clicked' , () => {
        render(<Button/>)
        const button = screen.getByText(/clicked/i)
        fireEvent.click(button)
        expect(screen.getByText('Clicked 1 times')).toBeInTheDocument()
        fireEvent.click(button)
        expect(screen.getByText('Clicked 2 times')).toBeInTheDocument()
    })
})