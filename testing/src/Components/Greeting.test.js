import {render , screen} from '@testing-library/react'

import Greeting from './Greeting'

describe('Greeting', () => {
    it('displays the correct greeting', () => {
        render(<Greeting name='John' />)
        const textElement = screen.getByText('Hello , John!')
        expect(textElement).toBeInTheDocument()
    })
})