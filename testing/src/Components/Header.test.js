import {render , screen} from '@testing-library/react'

// test('renders the heading' , () => {
//     const {getByText} = render(<h1>Hello , World!</h1>)
//     expect(getByText('Hello , World!')).toBeInTheDocument()
// })

// latest way
test('renders the heading' , () => {
    render(<h1>Hello , World!</h1>)
    const headingElement = screen.getByText('Hello , World!')
    expect((headingElement)).toBeInTheDocument()
})